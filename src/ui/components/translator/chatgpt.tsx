interface Props {
  config: any;
  setConfig: any;
}

export const ChatGPT = ({ config, setConfig }: Props) => {
  return (
    <div>
      <label
        htmlFor="chatgpt-api-keys"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        API Keys
      </label>
      <input
        type="text"
        id="chatgpt-api-keys"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={config.apiKeys ?? ''}
        onChange={(e) => setConfig({ ...config, apiKeys: e.target.value })}
      />
    </div>
  );
};
