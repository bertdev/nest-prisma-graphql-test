import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DonationsService } from './donations.service';
import { OrderByParams } from '../graphql';
import { DonationCreateInput } from '../@generated/donation/donation-create.input';

@Resolver('Donation')
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation('createDonation')
  create(
    @Args('createDonationInput')
    createDonationInput: DonationCreateInput,
  ) {
    return this.donationsService.create(createDonationInput);
  }

  @Query('donations')
  findAll(@Args('orderBy') orderBy?: OrderByParams) {
    return this.donationsService.findAll(orderBy);
  }

  @Query('donation')
  findOne(@Args('id') id: number) {
    return this.donationsService.findOne(id);
  }

  // @Mutation('updateDonation')
  // update(@Args('updateDonationInput') updateDonationInput: UpdateDonationInput) {
  //   return this.donationsService.update(updateDonationInput.id, updateDonationInput);
  // }

  // @Mutation('removeDonation')
  // remove(@Args('id') id: number) {
  //   return this.donationsService.remove(id);
  // }
}
