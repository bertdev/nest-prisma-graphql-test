import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Donation {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    count!: number;

    @Field(() => String, {nullable:false})
    displayName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    mobilePhone!: string | null;

    @Field(() => String, {nullable:true})
    team!: string | null;

    @Field(() => String, {nullable:true})
    message!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
