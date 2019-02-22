export enum BotCommandEnum {
  start = 1,
  settings,
  help,
}

export function getCmdStr(key: BotCommandEnum, append: boolean = true) {
  const cmdStr = BotCommandEnum[key];
  return append ? `/${cmdStr}` : cmdStr
}