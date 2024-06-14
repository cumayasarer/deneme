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
import { ReferansController } from "../referans.controller";
import { ReferansService } from "../referans.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  aciklama: "exampleAciklama",
  ad: "exampleAd",
  createdAt: new Date(),
  firma: "exampleFirma",
  id: "exampleId",
  pozisyon: "examplePozisyon",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  aciklama: "exampleAciklama",
  ad: "exampleAd",
  createdAt: new Date(),
  firma: "exampleFirma",
  id: "exampleId",
  pozisyon: "examplePozisyon",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    aciklama: "exampleAciklama",
    ad: "exampleAd",
    createdAt: new Date(),
    firma: "exampleFirma",
    id: "exampleId",
    pozisyon: "examplePozisyon",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  aciklama: "exampleAciklama",
  ad: "exampleAd",
  createdAt: new Date(),
  firma: "exampleFirma",
  id: "exampleId",
  pozisyon: "examplePozisyon",
  updatedAt: new Date(),
};

const service = {
  createReferans() {
    return CREATE_RESULT;
  },
  referansItems: () => FIND_MANY_RESULT,
  referans: ({ where }: { where: { id: string } }) => {
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

describe("Referans", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ReferansService,
          useValue: service,
        },
      ],
      controllers: [ReferansController],
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

  test("POST /referans", async () => {
    await request(app.getHttpServer())
      .post("/referans")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /referans", async () => {
    await request(app.getHttpServer())
      .get("/referans")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /referans/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/referans"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /referans/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/referans"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /referans existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/referans")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/referans")
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
