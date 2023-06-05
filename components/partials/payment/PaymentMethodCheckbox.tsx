interface Props{
  status: boolean;
  text: string;
  value: 'oxxo' | 'card';
}

const PaymentMethodCheckbox = ({value, text, status} : Props) => {
  const borderColor = status ? '#47D985' : '#DFDFEB'; 
  return (
    <div>
      <label
        htmlFor={value}
        className="p-3 my-3 text-center d-flex align-items-center justify-content-center cursor"
        style={{
          border: `1px solid ${borderColor}`,
          borderRadius: "12px",
          minHeight: "100px",
        }}
      >
        {text}
      </label>
      <input type="radio" name="rGroup" value={value} id={value} style={{display: 'none'}}/>
    </div>
  );
};

export { PaymentMethodCheckbox };
