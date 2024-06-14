import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { KullaniciController } from "../kullanici.controller";
import { KullaniciService } from "../kullanici.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  ad: "exampleAd",
  biyografi: "exampleBiyografi",
  createdAt: new Date(),
  ePosta: "exampleEPosta",
  id: "exampleId",
  soyad: "exampleSoyad",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  ad: "exampleAd",
  biyografi: "exampleBiyografi",
  createdAt: new Date(),
  ePosta: "exampleEPosta",
  id: "exampleId",
  soyad: "exampleSoyad",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    ad: "exampleAd",
    biyografi: "exampleBiyografi",
    createdAt: new Date(),
    ePosta: "exampleEPosta",
    id: "exampleId",
    soyad: "exampleSoyad",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  ad: "exampleAd",
  biyografi: "exampleBiyografi",
  createdAt: new Date(),
  ePosta: "exampleEPosta",
  id: "exampleId",
  soyad: "exampleSoyad",
  updatedAt: new Date(),
};

const service = {
  createKullanici() {
    return CREATE_RESULT;
  },
  kullanicis: () => FIND_MANY_RESULT,
  kullanici: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Kullanici", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: KullaniciService,
          useValue: service,
        },
      ],
      controllers: [KullaniciController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /kullanicis", async () => {
    await request(app.getHttpServer())
      .post("/kullanicis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /kullanicis", async () => {
    await request(app.getHttpServer())
      .get("/kullanicis")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /kullanicis/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/kullanicis"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /kullanicis/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/kullanicis"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /kullanicis existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/kullanicis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/kullanicis")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
