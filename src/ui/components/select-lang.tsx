interface Props {
  type: 'from' | 'to';
  value: string;
  onChange: (value: string) => void;
}

export const SelectLang = ({ type, value, onChange }: Props) => {
  return (
    <div className="w-60">
      <label
        htmlFor={`select-lang-${type}`}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Select {type === 'from' ? 'From' : 'To'} Language
      </label>
      <select
        id={`select-lang-${type}`}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="English">English</option>
        <option value="简体中文">简体中文</option>
      </select>
    </div>
  );
};
