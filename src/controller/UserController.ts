import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { UserRepository } from '../repository/UserRepository';
import { ProfileRepository } from '../repository/ProfileRepository';

export const createUser = async (req: Request, res: Response) => {
  const connection = getConnection();
  console.log(connection);
  const userRepo = connection.getCustomRepository(UserRepository);
  const profileRepo = connection.getCustomRepository(ProfileRepository);
  console.log(userRepo);
  try {
    const profile = await profileRepo.createProfile(true);
    console.log(profile);

    let user = await userRepo.createUser('Aninda', 'Kar', 'andy0104@gmail.com', 34, '+91-9874259153', profile);
    console.log(user);    
    return res.status(201).json({ message: 'User created', user, profile });
  } catch (error) {
    console.log('User creation error');
    console.log(error);
  }
  return res.status(500).json({ message: 'Internal server error' });
}