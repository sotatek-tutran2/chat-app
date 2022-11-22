import React, { FC, PropsWithChildren } from "react";
import { ModalHeaderStyle } from "../../styles/ui/modal";

const ModalHeader: FC<PropsWithChildren> = ({ children }) => {
  return <ModalHeaderStyle>{children}</ModalHeaderStyle>;
};

export default ModalHeader;
