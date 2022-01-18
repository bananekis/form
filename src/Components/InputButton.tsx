import { ErrorQueries, FormQueries } from "../types";
import { Eye } from "../Icons/Eye";
import _ from "lodash";
import styled from "styled-components";

const FormItem = styled.div`
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    margin-bottom: 1em !important;
  }
`;

const Input = styled.input<{ propSize: string; borderColor: string }>`
  background: #f6f8fa;
  border: 1px solid
    ${(props) => (props.borderColor === "valid" ? "white" : "red")};
  outline: none;
  width: 100%;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  font-style: medium;
  color: ${(props) => (props.borderColor === "valid" ? "#1b2c45" : "red")};
  font-family: "DM Sans", sans-serif;
  line-height: 20.83px;
  transition: all 0.1s ease-in-out;
  position: relative;
  padding: ${(props) =>
    props.propSize === "small" ? "12px" : "18px 12px 6px 12px"};

  &:hover {
    border: 1px solid #d5dbe2;
  }
  &:focus {
    border-bottom: 1px solid
      ${(props) => (props.borderColor === "valid" ? "#004eef" : "none")};
  }

  @media (max-width: 768px) {
    margin-bottom: 1em;
  }
`;

const Label = styled.label`
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  line-height: 15.62px;
  font-size: 12px;
  position: absolute;
  z-index: 99;
  top: 3px;
  left: 13px;
  color: #76879e;
`;

const DivError = styled.div`
  position: absolute;
  color: red;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 16px;
  bottom: -21px;
  left: 10px;

  @media (max-width: 768px) {
    bottom: -4px;
    z-index: 999;
  }
`;

interface Props {
  queries: FormQueries | any;
  setQueries: React.Dispatch<React.SetStateAction<FormQueries>>;
  name: string;
  type: string;
  errors: ErrorQueries | any;
}

const InputButton = ({ queries, setQueries, name, type, errors }: Props) => {
  const queryName = _.camelCase(name);
  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueries((p) => ({
      ...p,
      [queryName]: e.target.value,
    }));
  };

  return (
    <FormItem>
      {queries[queryName] !== "" && <Label htmlFor={name}>{name}</Label>}
      <Input
        type={type}
        placeholder={name}
        value={queries[queryName]}
        onChange={handleQuery}
        propSize={queries[queryName] !== "" ? "large" : "small"}
        borderColor={errors[queryName] !== false ? "invalid" : "valid"}
      />
      {type === "password" && <Eye />}
      {errors[queryName] && <DivError>{errors[queryName]}</DivError>}
    </FormItem>
  );
};

export default InputButton;
