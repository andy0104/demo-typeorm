import { EntityRepository, AbstractRepository } from 'typeorm';
import { User } from '../entity/User';
import { Profile } from '../entity/Profile';

@EntityRepository(User)
export class UserRepository extends AbstractRepository<User> {
  createUser(
    firstName: string, 
    lastName: string, 
    email: string, 
    age: number, 
    contactno: string, 
    profile: Profile
  ) {
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.contactno = contactno;
    user.profile = profile;
    return this.manager.save(user);    
  }
}

