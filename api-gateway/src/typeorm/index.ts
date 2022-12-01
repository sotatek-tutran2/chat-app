// import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { Session } from './entities/session.entity';
import { Conversation } from './entities/conversation.entity';
import { Participant } from './entities/Participant.entity';
const entities = [User, Session, Conversation, Participant];

// export const AppDataSource = new DataSource({
//   type: 'mysql',
//   host: process.env.MYSQL_DB_HOST,
//   port: parseInt(process.env.MYSQL_DB_PORT),
//   username: process.env.MYSQL_DB_USERNAME,
//   password: process.env.MYSQL_DB_PASSWORD,
//   database: process.env.MYSQL_DB_DATABASE,
//   entities: [User],
//   synchronize: true,
// });

export { User, Session, entities, Conversation, Participant };
