import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import BlockList from "../../../components/kit/components/list/list/BlockList";
import SimpleList from "../../../components/kit/components/list/list/SimpleList";

const ListPages: FC = () => {
  return (
    <AppLayout>
      <SectionHeader title="List" />
      <ComponentLayout
        showSwitchMode={true}
        title="Simple list"
        element={<SimpleList />}
        component={SimpleList}
      />
      <ComponentLayout
        showSwitchMode={true}
        title="With action"
        element={<SimpleList withAction={true} />}
        component={SimpleList}
      />
      <ComponentLayout
        showSwitchMode={true}
        title="Bloc list"
        element={<BlockList />}
        component={BlockList}
      />
      <ComponentLayout
        showSwitchMode={true}
        title="With desc"
        element={<BlockList withDesc={true} />}
        component={BlockList}
      />
      <ComponentLayout
        showSwitchMode={true}
        title="With desc and action "
        element={<BlockList withDesc={true} withAction={true} />}
        component={BlockList}
      />
      <ComponentLayout
        showSwitchMode={true}
        title="With hover effect"
        element={
          <BlockList withDesc={true} withEffect={true} withAction={true} />
        }
        component={BlockList}
      />
    </AppLayout>
  );
};

export default ListPages;