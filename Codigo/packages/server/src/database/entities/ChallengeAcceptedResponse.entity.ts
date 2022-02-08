import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ChallengeAccepted } from './ChallengeAccepted.entity';
import { Model } from './Model.abstract';
import { SavedFile } from './SavedFile.entity';
import { ChallengeAcceptedResponse as IChallengeAcceptedResponse } from '@sec/common';

console.log(Model);
@Entity()
export class ChallengeAcceptedResponse
  extends Model
  implements IChallengeAcceptedResponse
{
  @Column({ length: 2000 })
  response: string;

  @ManyToOne(
    () => ChallengeAccepted,
    (challengeAccepted) => challengeAccepted.responses,
  )
  challengeAccepted: ChallengeAccepted;

  @OneToMany(() => SavedFile, (savedFile) => savedFile.id)
  savedFiles: SavedFile[];
}
