import UserService from "@/services/UserService";

class UserApi {
  static async changeAvatar(id: string, set: any, get: any) {
    const { profile } = get();
    try {
      await UserService.changeAvatar(id);
      set({ profile: { ...profile, avatar_id: id } });
    } catch (e) {
      console.log(e);
    }
  }
  static async changeNickname(name: string, set: any, get: any) {
    const { profile } = get();
    try {
      await UserService.changeNickname(name);
      set({ profile: { ...profile, nickname: name } });
    } catch (e) {
      console.log(e);
    }
  }
  static async getAvatars(set: any) {
    try {
      const { data } = await UserService.getAvatars();
      set({ avatars: data });
    } catch (e) {
      console.log(e);
    }
  }
  static async getProfile(set: any, get: any) {
    set({ loading: true, error: null });
    try {
      const { data: profile } = await UserService.getMeProfile();
      this.getAvatars(set);
      set({
        profile: {
          ...profile,
          avatar_id: !profile.avatar_id ? 0 : profile.avatar_id,
        },
      });
    } catch (e) {
      set({
        profile: null,
        error: true,
      });
    } finally {
      set({ loading: false });
    }
  }
}

export default UserApi;
