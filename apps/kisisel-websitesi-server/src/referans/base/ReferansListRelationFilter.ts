/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReferansWhereInput } from "./ReferansWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ReferansListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ReferansWhereInput,
  })
  @ValidateNested()
  @Type(() => ReferansWhereInput)
  @IsOptional()
  @Field(() => ReferansWhereInput, {
    nullable: true,
  })
  every?: ReferansWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReferansWhereInput,
  })
  @ValidateNested()
  @Type(() => ReferansWhereInput)
  @IsOptional()
  @Field(() => ReferansWhereInput, {
    nullable: true,
  })
  some?: ReferansWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReferansWhereInput,
  })
  @ValidateNested()
  @Type(() => ReferansWhereInput)
  @IsOptional()
  @Field(() => ReferansWhereInput, {
    nullable: true,
  })
  none?: ReferansWhereInput;
}
export { ReferansListRelationFilter as ReferansListRelationFilter };
