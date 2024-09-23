/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChapterWhereInput } from "./ChapterWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ChapterOrderByInput } from "./ChapterOrderByInput";

@ArgsType()
class ChapterFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ChapterWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ChapterWhereInput, { nullable: true })
  @Type(() => ChapterWhereInput)
  where?: ChapterWhereInput;

  @ApiProperty({
    required: false,
    type: [ChapterOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ChapterOrderByInput], { nullable: true })
  @Type(() => ChapterOrderByInput)
  orderBy?: Array<ChapterOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ChapterFindManyArgs as ChapterFindManyArgs };
