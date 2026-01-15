import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import "../../../Custom-css/tiptap.css";
import TiptapModal from "../../../Modals/TiptapModal";
import { getToolbarActions } from "../../../utils/tiptapToolbarConfig";
import ToolbarButton from "../../../Buttons/ToolbarButton";

const TiptapEditor = ({ value, onChange }) => {
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  const editor = useEditor({
    extensions: [StarterKit, Underline, Link.configure({ openOnClick: false })],
    content: "",
    autofocus: false,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [editor, value]);

  if (!editor) return null;

  // modal
  const openLinkModal = () => {
    const prevUrl = editor.getAttributes("link").href;
    setLinkUrl(prevUrl || "");
    setShowLinkModal(true);
  };

  const applyLink = () => {
    if (linkUrl === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    } else {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: linkUrl })
        .run();
    }
    setShowLinkModal(false);
  };

  const toolbarActions = getToolbarActions(editor, openLinkModal);

  return (
    <>
      <div className="space-y-2">
        {/* Toolbar */}
        <div className="flex flex-wrap gap-3 border border-gray-300 px-2 py-1 rounded">
          {toolbarActions.map(({ icon, action, isActive, disabled }, idx) => (
            <ToolbarButton
              key={idx}
              icon={icon}
              onClick={action}
              isActive={isActive}
              disabled={disabled}
            />
          ))}
        </div>

        {/* Editor */}
        <div className="border border-gray-300 rounded min-h-[150px]">
          <EditorContent editor={editor} />
        </div>
      </div>
      {/*  Modal  */}
      <TiptapModal
        isOpen={showLinkModal}
        url={linkUrl}
        onChange={setLinkUrl}
        onCancel={() => setShowLinkModal(false)}
        onConfirm={applyLink}
      />
    </>
  );
};

export default TiptapEditor;
