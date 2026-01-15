import {
    FaBold,
    FaItalic,
    FaStrikethrough,
    FaUnderline,
    FaLink,
    FaUnlink,
  } from "react-icons/fa";
  import { RiListUnordered } from "react-icons/ri";
  import { VscListOrdered } from "react-icons/vsc";
  import { BiUndo, BiRedo } from "react-icons/bi";

export const getToolbarActions = (editor, openLinkModal) => [
    {
      icon: FaBold,
      label: "Bold",
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
      disabled: !editor.can().chain().focus().toggleBold().run(),
    },
    {
      icon: FaItalic,
      label: "Italic",
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
      disabled: !editor.can().chain().focus().toggleItalic().run(),
    },
    {
      icon: FaStrikethrough,
      label: "Strikethrough",
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive("strike"),
      disabled: !editor.can().chain().focus().toggleStrike().run(),
    },
    {
      icon: FaUnderline,
      label: "Underline",
      action: () => editor.chain().focus().toggleUnderline().run(),
      isActive: editor.isActive("underline"),
    },
    {
      icon: RiListUnordered,
      label: "Bullet List",
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
    },
    {
      icon: VscListOrdered,
      label: "Ordered List",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive("orderedList"),
    },
    {
      icon: FaLink,
      label: "Insert Link",
      action: openLinkModal,
      isActive: editor.isActive("link"),
    },
    {
      icon: FaUnlink,
      label: "Remove Link",
      action: () => editor.chain().focus().unsetLink().run(),
      disabled: !editor.isActive("link"),
    },
    {
      icon: BiUndo,
      label: "Undo",
      action: () => editor.chain().focus().undo().run(),
      disabled: !editor.can().chain().focus().undo().run(),
    },
    {
      icon: BiRedo,
      label: "Redo",
      action: () => editor.chain().focus().redo().run(),
      disabled: !editor.can().chain().focus().redo().run(),
    },
  ];
  