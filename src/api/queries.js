import { gql } from "@apollo/client";

export const GET_ACCOUNTS = gql`
  query GetAccounts {
    getAccounts {
      id
      name
      email
      phone
    }
  }
`;

export const GET_ACCOUNT_WITH_DEVICES = gql`
  query GetAccount($getAccountId: ID!) {
    getAccount(id: $getAccountId) {
      id
      name
      email
      phone
      devices {
        id
        name
        type
        status
      }
    }
  }
`;

// export const CREATE_ACCOUNT = gql`
//   mutation CreateAccount($input: CreateAccountInput!) {
//     createAccount(input: $input) {
//       name
//       email
//     }
//   }
// `;

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount($name: String!, $email: String!, $phone: String) {
    createAccount(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

export const CREATE_DEVICE = gql`
  mutation CreateDevice($input: CreateDeviceInput!) {
    createDevice(input: $input) {
      id
      name
      type
      status
      accountId
    }
  }
`;
