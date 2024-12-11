export const EAS_CONTRACT_SCROLL = "0xC47300428b6AD2c7D03BB76D05A176058b47E6B0";

export const RESOLVER_CONTRACT_SCROLL =
  "0x7Fc71df25E109efbc0ad7d80065c6a37fd648eD3";

export enum ROLES {
  ROOT = "0x79e553c6f53701daa99614646285e66adb98ff0fcc1ef165dd2718e5c873bee6",
  MANAGER = "0x241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b08",
  VILLAGER = "0x7e8ac59880745312f8754f56b69cccc1c6b2112d567ccf50e4e6dc2e39a7c67a",
}

export interface Schemas {
  uid: `0x${string}`;
  data: string;
  revocable: boolean;
  allowedRole: string[];
}

export const TRUSTFUL_SCHEMAS: { [key: string]: Schemas } = {
  ATTEST_MANAGER: {
    uid: "0x3f7ab1b49d993220e928f71da02745eeeabe5bce53308ba9f47416fe0a0abfc4",
    data: "string role",
    revocable: true,
    allowedRole: [ROLES.ROOT],
  },
  ATTEST_VILLAGER: {
    uid: "0x622181707fd9d196c9212d09db8788e3b46945304a4b9e7cbc55b4e179602a62",
    data: "string status",
    revocable: false,
    allowedRole: [ROLES.MANAGER],
  },
  ATTEST_EVENT: {
    uid: "0x1e7c8ac5a6991295aeae686f65be86b670c44903593bb54fce40cfe843a734ad",
    data: "string title,string comment",
    revocable: false,
    allowedRole: [ROLES.VILLAGER],
  },
  ATTEST_RESPONSE: {
    uid: "0x61f5f38074b7f6201176fbccd171583040354ba498e8e2df50ff146212a636f4",
    data: "bool status",
    revocable: true,
    allowedRole: [ROLES.VILLAGER],
  },
};

export interface BadgeTitle {
  title: string;
  uid: `0x${string}`;
  allowComment: boolean;
  revocable: boolean;
  data: string;
  allowedRole: string[];
}

export const TRUSTFUL_BADGE_TITLES: BadgeTitle[] = [
  {
    title: "Manager",
    uid: TRUSTFUL_SCHEMAS.ATTEST_MANAGER.uid,
    allowComment: false,
    revocable: true,
    data: TRUSTFUL_SCHEMAS.ATTEST_MANAGER.data,
    allowedRole: TRUSTFUL_SCHEMAS.ATTEST_MANAGER.allowedRole,
  },
  {
    title: "Check-in",
    uid: TRUSTFUL_SCHEMAS.ATTEST_VILLAGER.uid,
    allowComment: false,
    revocable: false,
    data: TRUSTFUL_SCHEMAS.ATTEST_VILLAGER.data,
    allowedRole: TRUSTFUL_SCHEMAS.ATTEST_VILLAGER.allowedRole,
  },
  {
    title: "Check-out",
    uid: TRUSTFUL_SCHEMAS.ATTEST_VILLAGER.uid,
    allowComment: true,
    revocable: false,
    data: TRUSTFUL_SCHEMAS.ATTEST_VILLAGER.data,
    allowedRole: TRUSTFUL_SCHEMAS.ATTEST_VILLAGER.allowedRole,
  },
];

export const ALCHEMY_PUBLIC_RPC = process.env.ALCHEMY_RPC_URL;
