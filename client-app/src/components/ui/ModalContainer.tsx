import { ReactElement } from "react";
import { ModalContainerStyle } from "../../styles/ui/modal";

interface IModalContainerProps {
  children: ReactElement | string;
  show: boolean;
}

const ModalContainer = (props: IModalContainerProps) => {
  return <ModalContainerStyle {...props}>{props.children}</ModalContainerStyle>;
};

export default ModalContainer;
