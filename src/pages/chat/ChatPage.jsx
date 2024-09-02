import React from "react";
import Layout from "../../components/Common/Layout";
import ChatMain from "../../pages/chat/ChatMain";
function ChatPage() {
  window.global = window;

  return (
    <Layout>
      <ChatMain />
    </Layout>
  );
}

export default ChatPage;
