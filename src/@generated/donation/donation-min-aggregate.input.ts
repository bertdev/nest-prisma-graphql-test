import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DonationMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    count?: true;

    @Field(() => Boolean, {nullable:true})
    displayName?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    mobilePhone?: true;

    @Field(() => Boolean, {nullable:true})
    team?: true;

    @Field(() => Boolean, {nullable:true})
    message?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
