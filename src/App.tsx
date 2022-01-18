import { ErrorQueries, FlagT, FormQueries } from "./types";
import { color, customTheme } from "./colors";
import { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import Flag from "react-world-flags";
import InputButton from "./Components/InputButton";
import Select, { SingleValue } from "react-select";
import Success from "./Components/Success";
import Switch from "react-switch";
import styled from "styled-components";

const DivContainer = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const DivTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 78.12px;
  letter-spacing: -2%;
  color: ${color.grey};

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const PPrivate = styled.p`
  font-weight: 500;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  color: #1c2d41;
  flex: 1;
`;

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    width: 45%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`;

const Form = styled.form`
  box-shadow: 5px 9px 29px 0px rgb(0 0 0 / 4%);
  -webkit-box-shadow: 5px 9px 29px 0px rgb(0 0 0 / 4%);
  -moz-box-shadow: 5px 9px 29px 0px rgb(0 0 0 / 4%);
  border-radius: 17px;
  padding: 10px;
  & > div:not(:last-child) {
    margin-bottom: 2em;
  }

  @media (max-width: 768px) {
    & > div:not(:last-child) {
      margin-bottom: 0em;
    }
  }
`;

const Icon = styled.div`
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  font-size: 11px;
  top: 6px;
  left: 4px;
  position: absolute;
  color: white;
`;

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 16px;
  width: 268px;
  height: 62px;
  margin-right: 5em;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 0em;
  }

  background: linear-gradient(
    to left,
    rgba(0, 78, 239, 1),
    rgba(134, 0, 239, 1)
  );

  &:hover {
    background: linear-gradient(
      to right,
      rgba(0, 78, 239, 1),
      rgba(134, 0, 239, 1)
    );
  }
`;

const PButton = styled.p`
  font-size: 16px;
  font-weight: 600;
  font-family: "DM Sans", sans-serif;
  color: white;
`;

const DivSelectInput = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: "DM Sans";
  color: rgba(118, 135, 158, 1);
  margin-left: 1em;
`;

const DivSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DivFinal = styled(DivSwitch)`
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  language: "",
  country: "",
  password: "",
  confirmPassword: "",
  private: false,
};

const errorState = {
  email: false,
  firstName: false,
  lastName: false,
  language: false,
  country: false,
  password: false,
  confirmPassword: false,
};

const CustomFlag = ({ code, lan }: FlagT) => (
  <div style={{ width: "20px", display: "flex", alignItems: "center" }}>
    <Flag
      code={code}
      style={{ borderRadius: "50%", height: "20px", width: "20px" }}
    />
    <DivSelectInput>{lan}</DivSelectInput>
  </div>
);

function App() {
  const [queries, setQueries] = useState<FormQueries>(initialState);
  const [countries, setCountries] = useState<any>([]);
  const [checked, setChecked] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorQueries>(errorState);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://restcountries.com/v2/all?fields=name"
      );
      const data = await response.json();
      setCountries(data);
    };

    getData();
  }, []);

  const handleSwitchChange = (state: boolean) => {
    setChecked(state);
    setQueries((p) => ({
      ...p,
      private: state,
    }));
  };

  const handleSelectChange = (
    response: SingleValue<{
      value: string;
      label: JSX.Element;
    }>
  ) => {
    const queryName =
      response?.label.props.lan !== undefined ? "language" : "country";

    setQueries((p) => ({
      ...p,
      [queryName]: response!.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors(errorState);
    setShowSuccess(false);
    let isContinued = true;

    // checks for empty inputs first

    for (const element of Object.keys(queries)) {
      //@ts-ignore;

      if (queries[element] === "") {
        isContinued = false;
        return setErrors((p) => ({
          ...p,
          [element]: `please input ${element}!`,
        }));
      }
    }

    // email and pass check

    if (!queries.email.includes("@") && isContinued) {
      return setErrors((p) => ({
        ...p,
        email: "please input valid email address!",
      }));
    } else if (queries.password !== queries.confirmPassword && isContinued) {
      return setErrors((p) => ({
        ...p,
        password: "passwords do not match!",
        confirmPassword: "passwords do not match!",
      }));
    }

    return setShowSuccess(true);
  };

  const countryOptions = countries.map((country: any) => {
    return {
      value: country.name,
      label: (
        <DivSelectInput style={{ marginLeft: "0" }}>
          {country.name}
        </DivSelectInput>
      ),
    };
  });

  const lanOptions = [
    { value: "Slovakia", label: <CustomFlag code="sk" lan="Slovakia" /> },
    { value: "English", label: <CustomFlag code="gb" lan="English" /> },
  ];

  return (
    <DivContainer>
      <DivTitle>
        <Title>
          {showSuccess ? "Success registration" : "Registration Form"}
        </Title>
      </DivTitle>
      {showSuccess ? (
        <FadeIn>
          <Success />
        </FadeIn>
      ) : (
        <Form onSubmit={handleSubmit}>
          <InputButton
            queries={queries}
            setQueries={setQueries}
            name="Email"
            type="text"
            errors={errors}
          />
          <ItemsWrapper>
            <InputButton
              queries={queries}
              setQueries={setQueries}
              name="First Name"
              type="text"
              errors={errors}
            />
            <InputButton
              queries={queries}
              setQueries={setQueries}
              name="Last name"
              type="text"
              errors={errors}
            />
          </ItemsWrapper>
          <ItemsWrapper>
            <Select
              options={lanOptions}
              placeholder="Language"
              theme={customTheme}
              onChange={handleSelectChange}
              className={
                errors.language !== false
                  ? "z-index-high invalid-select"
                  : "z-index-high"
              }
            />
            <Select
              options={countryOptions}
              placeholder="Country"
              theme={customTheme}
              onChange={handleSelectChange}
              className={
                errors.country !== false
                  ? "z-index-low invalid-select"
                  : "z-index-low"
              }
            />
          </ItemsWrapper>
          <ItemsWrapper>
            <InputButton
              queries={queries}
              setQueries={setQueries}
              name="Password"
              type="password"
              errors={errors}
            />
            <InputButton
              queries={queries}
              setQueries={setQueries}
              name="Confirm Password"
              type="password"
              errors={errors}
            />
          </ItemsWrapper>
          <DivSwitch>
            <PPrivate>Private Profile</PPrivate>
            <Switch
              onChange={handleSwitchChange}
              checked={checked}
              checkedIcon={<Icon>YES</Icon>}
              uncheckedIcon={<Icon>NO</Icon>}
              onColor="#004EEF"
            />
          </DivSwitch>
          <DivFinal>
            <Button type="submit">
              <PButton>Sign Up</PButton>
            </Button>
            <PPrivate>
              Creating an account means you’re okay with our Privacy Policy.
            </PPrivate>
          </DivFinal>
        </Form>
      )}
    </DivContainer>
  );
}

export default App;
