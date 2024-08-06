"use client";

import AccountsService from "@/services/admin/AccountsService";
import create from "zustand";
import AccountsApi from "@/app/api/admin/accounts/AccountsApi";
import { ProfileMeResponse } from "@/models/response/UserResponse";
import {
  AccountsPageDataResponse,
  AccountStatisticsResponse,
  AdminAccountResponse,
} from "@/models/response/admin/AccountsResponse";

interface IAccountsStore {
  accountsPageData: AccountsPageDataResponse;
  accounts: AdminAccountResponse[];
  accountsNumber: number;
  sumAllBalances: number;
  accountStats: AccountStatisticsResponse;
  menuAccount: AdminAccountResponse;
  limit: number;
  loading: boolean;
  error: any;
  setMenuAccount: (account: AdminAccountResponse) => void;
  getAccounts: (offset: number, limit: number) => Promise<void>;
  getAccountStats: (id: number) => Promise<void>;
  getSumAllBalances: () => Promise<void>;
  changeBalance: (id: number, balance: string) => Promise<void>;
  removeAccount: (id: number) => Promise<void>;
}

const useAccountsStore = create<IAccountsStore>((set, get) => ({
  accountsPageData: {} as AccountsPageDataResponse,
  accounts: [] as AdminAccountResponse[],
  accountStats: {} as AccountStatisticsResponse,
  accountsNumber: 0,
  sumAllBalances: 0,
  limit: 15,
  menuAccount: {} as AdminAccountResponse,
  loading: false,
  error: null,

  setMenuAccount(account: AdminAccountResponse) {
    set({ menuAccount: account });
  },

  async getAccounts(offset: number, limit: number) {
    await AccountsApi.getAccounts(offset, limit, set);
  },

  async getSumAllBalances() {
    await AccountsApi.getSumAllBalances(set);
  },

  async getAccountStats(id: number) {
    await AccountsApi.getAccountStats(id, set);
  },

  async changeBalance(id: number, balance: string) {
    await AccountsApi.changeBalance(id, balance, set, get);
  },
  async removeAccount(id: number) {
    await AccountsApi.removeAccount(id, set, get);
  },
}));

export default useAccountsStore;
