import { EntityRepository, AbstractRepository } from "typeorm";
import { Profile } from "../entity/Profile";
import { User } from "../entity/User";

@EntityRepository(Profile)
export class ProfileRepository extends AbstractRepository<Profile> {
  createProfile(isActive: boolean) {
    const profile = new Profile();
    profile.isActive = isActive;    
    return this.manager.save(profile);
  }
}