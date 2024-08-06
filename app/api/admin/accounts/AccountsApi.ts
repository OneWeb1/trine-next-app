"use client";

import AccountsService from "@/services/admin/AccountsService";

class AccountsApi {
  static async getAccounts(offset: number, limit: number, set: any) {
    set({ loading: true, error: null });
    try {
      const { data } = await AccountsService.getAccounts(offset, limit);
      const {
        data: { items },
      } = await AccountsService.getAccounts(0, 100000);
      set({
        accountsPageData: data,
        accounts: data.items,
        accountsNumber: items.length,
      });
    } catch (error) {
      set({ error });
    } finally {
      set({ loading: false });
    }
  }

  static async getAccountById(id: number) {}

  static async getSumAllBalances(set: any) {
    try {
      const { data } = await AccountsService.getTotalBalance();
      set({ sumAllBalances: data.totalBalance });
    } catch (error) {
      console.log(error);
    }
  }

  static async changeBalance(id: number, balance: string, set: any, get: any) {
    const { limit } = get();
    try {
      const { data } = await AccountsService.changeBalance(id, balance);
      this.getAccounts(
        Number(localStorage.getItem("accounts-page")) * limit - limit,
        limit,
        set
      );
    } catch (error) {
      console.log(error);
    }
  }

  static async getAccountStats(id: number, set: any) {
    try {
      const { data } = await AccountsService.getAccountStats(id);
      set({ accountStats: data });
    } catch (error) {
      console.log(error);
    }
  }

  static async removeAccount(id: number, set: any, get: any) {
    const { limit } = get();

    try {
      await AccountsService.removeAccountById(id);
      if (typeof window === "undefined") return;
      this.getAccounts(
        Number(localStorage.getItem("accounts-page")) * limit - limit,
        limit,
        set
      );
    } catch (error) {
      console.log(error);
    }
  }
}

export default AccountsApi;
