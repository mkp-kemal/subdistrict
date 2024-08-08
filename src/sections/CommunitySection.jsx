import { Tabs } from 'antd';
import BumdesContent from './content/BumdesContent';

const { TabPane } = Tabs;

const CommunitySection = () => {
    return (
        <div className="bg-white p-2 mt-36">
            <div className="container mx-auto px-4">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4">Community</h2>
                        </div>
                    </div>
                </div>
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="BumDes" key="1">
                       <BumdesContent />
                    </TabPane>
                    <TabPane tab="Linmas" key="2">
                        <p>Content for Linmas</p>
                    </TabPane>
                    <TabPane tab="DKM" key="3">
                        <p>Content for DKM</p>
                    </TabPane>
                    <TabPane tab="MUI" key="4">
                        <p>Content for MUI</p>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default CommunitySection;
