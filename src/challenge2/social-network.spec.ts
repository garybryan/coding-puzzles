import { SocialNetwork } from './social-network';

describe('getFriends', () => {
  it('gets friends', () => {
    const sn = new SocialNetwork();

    sn.add('Me', 'Erlich Bachman');
    sn.add('Me', 'Nelson Bighetti');
    sn.add('Bertram Gilfoyle', 'Me');
    sn.add('Me', 'Dinesh Chugtai');

    expect(sn.getFriends('Me')).toStrictEqual([
      'Erlich Bachman',
      'Nelson Bighetti',
      'Bertram Gilfoyle',
      'Dinesh Chugtai',
    ]);
  });

  it('gets no friends for someone with no friends', () => {
    const sn = new SocialNetwork();

    expect(sn.getFriends('Johnnie Naepals')).toStrictEqual([]);
  });
});
