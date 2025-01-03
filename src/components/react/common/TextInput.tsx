interface TextInputProps {
  label: string
  identifier: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  max?: number
  note?: string
}

const TextInput = ({
  label,
  identifier,
  value,
  onChange,
  placeholder,
  max,
  note,
}: TextInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={identifier}>{label}</label>
      <input
        type="text"
        id={identifier}
        name={identifier}
        className="border border-foreground rounded px-3 py-2 font-light"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        max={max}
      />
      {note && <p className="text-sm text-foreground opacity-60">{note}</p>}
    </div>
  )
}

export default TextInput
