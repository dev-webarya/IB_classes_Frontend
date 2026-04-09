import React from 'react';

interface ContentEditorProps {
    value?: string;
    initialContent?: string;
    onChange?: (html: string) => void;
    placeholder?: string;
}

export const ContentEditor: React.FC<ContentEditorProps> = ({
    value,
    initialContent = '',
    onChange,
    placeholder = 'Write your article content here...',
}) => {
    const currentValue = value !== undefined ? value : initialContent;
    return (
        <textarea
            className="w-full min-h-[300px] px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none resize-y text-sm text-gray-700 font-mono"
            value={currentValue}
            onChange={(e) => onChange && onChange(e.target.value)}
            placeholder={placeholder}
        />
    );
};

export default ContentEditor;
