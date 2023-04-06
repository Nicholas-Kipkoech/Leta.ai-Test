import React from "react";
import { Modal, Button } from "antd";

interface CustomModalProps {
  ModalVisible: boolean;
  handleOk: () => void;
  Title: string;
  content: any;
  handleCancel: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  ModalVisible,
  handleOk,
  handleCancel,
  Title,
  content,
}) => {
  return (
    <Modal
      title={Title}
      open={ModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" color="secondary" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="ok" type="primary" color="primary" onClick={handleOk}>
          OK
        </Button>,
      ]}
    >
      {content}
    </Modal>
  );
};

export default CustomModal;
