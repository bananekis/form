import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  top: 12px;
  right: 14px;
`;

export const Eye = () => (
  <Div>
    <svg
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 19C16.563 19 20.063 16 22.5 10C20.063 4 16.563 1 12 1C7.437 1 3.937 4 1.5 10C3.937 16 7.437 19 12 19ZM12 14.5C10.8076 14.4966 9.66498 14.0214 8.82181 13.1782C7.97864 12.335 7.50343 11.1924 7.5 10C7.5 7.525 9.525 5.5 12 5.5C14.475 5.5 16.5 7.525 16.5 10C16.5 12.475 14.475 14.5 12 14.5Z"
        stroke="#C0CCDA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Div>
);
