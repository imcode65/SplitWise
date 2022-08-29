export const WalletAddressFormat = (address: string) => {
  let result = address.slice(0, 4);
  result += '...';
  result += address.slice(address.length - 5, address.length - 1);
  return result;
};
