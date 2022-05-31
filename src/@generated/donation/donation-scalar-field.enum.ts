import { registerEnumType } from '@nestjs/graphql';

export enum DonationScalarFieldEnum {
    id = "id",
    count = "count",
    displayName = "displayName",
    email = "email",
    mobilePhone = "mobilePhone",
    team = "team",
    message = "message",
    createdAt = "createdAt"
}


registerEnumType(DonationScalarFieldEnum, { name: 'DonationScalarFieldEnum', description: undefined })
