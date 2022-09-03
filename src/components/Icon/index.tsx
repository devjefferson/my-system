import React from 'react';
import * as AntDesignIcons from 'react-icons/ai';
import * as BoxIcons from 'react-icons/bi';
import * as BootstrapIcons from 'react-icons/bs';
import * as FontAwesome from 'react-icons/fa';
import * as FcAbout from 'react-icons/fc';
import * as Feather from 'react-icons/fi';
import * as IonIcons4 from 'react-icons/io';
import * as MaterialDesign from 'react-icons/md';
import * as RemixIcon from 'react-icons/ri';

export const icons = {
  chevronLeft: MaterialDesign.MdChevronLeft,
  chevronRight: MaterialDesign.MdChevronRight,
  chevronDown: MaterialDesign.MdOutlineExpandMore,
  play: MaterialDesign.MdPlayCircleOutline,
  close: MaterialDesign.MdOutlineClose,
  plus: MaterialDesign.MdAdd,
  plusCircle: Feather.FiPlusCircle,
  minus: MaterialDesign.MdOutlineRemove,
  minusCircle: Feather.FiMinusCircle,
  google: FcAbout.FcGoogle,
  facebook: FontAwesome.FaFacebook,
  twitter: FontAwesome.FaTwitter,
  instagram: FontAwesome.FaInstagram,
  restart: MaterialDesign.MdRestartAlt,
  youtube: FontAwesome.FaYoutube,
  arrowUp: FontAwesome.FaArrowUp,
  whatsApp: FontAwesome.FaWhatsapp,
  alert: IonIcons4.IoMdAlert,
  menu: IonIcons4.IoIosMenu,
  qrCodeBorder: MaterialDesign.MdQrCodeScanner,
  clip: BootstrapIcons.BsPaperclip,
  share: RemixIcon.RiShareFill,
  edit: FontAwesome.FaEdit,
  eyes: AntDesignIcons.AiOutlineEye,
  eyesSlash: BootstrapIcons.BsEyeSlash,
  user: FontAwesome.FaRegUser,
  qrcode: MaterialDesign.MdQrCode2,
  calendar: BoxIcons.BiCalendarEvent,
  camera: AntDesignIcons.AiOutlineCamera,
  search: IonIcons4.IoMdSearch,
};

export type IconComponentProps = {
  name: keyof typeof icons;
  className?: string;
  size?: number;
  color?: string;
};

export default function IconComponent({ name, ...props }: IconComponentProps) {
  const IconFromName = icons[name];
  return <IconFromName {...props} />;
}
