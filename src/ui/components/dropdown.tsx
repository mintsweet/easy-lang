import { useToggle } from '@mints/hooks';

interface Props {
  items: Array<{
    key: string;
    label: string;
  }>;
  children: React.ReactNode;
  onClick?: (key: string, item: { key: string; label: string }) => void;
}

export const Dropdown = ({ items, children, onClick }: Props) => {
  const [show, setShow] = useToggle();

  return (
    <div className="relative">
      <button
        className="inline-flex items-center"
        type="button"
        onClick={setShow}
      >
        {children}
      </button>
      {show && (
        <div className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2 text-sm text-gray-700">
            {items.map((it) => (
              <li key={it.key} onClick={() => onClick?.(it.key, it)}>
                <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  {it.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
