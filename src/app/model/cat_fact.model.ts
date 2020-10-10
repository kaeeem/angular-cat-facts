import {User} from './user.model';

export class CatFact {
  _id: string;
  text: string;
  type: string;
  user: User;
  upvotes: number;
  userUpvoted: User;
}
