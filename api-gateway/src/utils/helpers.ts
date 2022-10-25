import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export async function hashPassword(rawPassword: string) {
  const salt = await bcrypt.genSalt(saltOrRounds);

  const hash = await bcrypt.hash(rawPassword, salt);

  return hash;
}
