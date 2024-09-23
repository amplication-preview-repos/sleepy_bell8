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
import { CommentCreateNestedManyWithoutChaptersInput } from "./CommentCreateNestedManyWithoutChaptersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { StoryWhereUniqueInput } from "../../story/base/StoryWhereUniqueInput";

@InputType()
class ChapterCreateInput {
  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutChaptersInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutChaptersInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutChaptersInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutChaptersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  overview?: string | null;

  @ApiProperty({
    required: false,
    type: () => StoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StoryWhereUniqueInput)
  @IsOptional()
  @Field(() => StoryWhereUniqueInput, {
    nullable: true,
  })
  story?: StoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { ChapterCreateInput as ChapterCreateInput };
