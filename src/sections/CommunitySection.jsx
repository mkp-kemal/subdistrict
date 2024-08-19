import { Tabs } from 'antd';
import BumdesContent from './content/BumdesContent';
import { Footer } from './HomeSection';
import DkmContent from './content/DkmContent';

const { TabPane } = Tabs;

const CommunitySection = () => {
    return (
        <>
            <div className="bg-white p-2 mt-36 mb-32">
                <div className="container mx-auto px-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold mb-4">Lembaga Masyarakat</h2>
                            </div>
                        </div>
                    </div>
                    <Tabs defaultActiveKey="1" centered>
                        <TabPane tab={<span className="font-bold">BumDes</span>} key="1">
                            <BumdesContent />
                        </TabPane>
                        <TabPane tab={<span className="font-bold">DKM</span>} key="3">
                            <DkmContent />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CommunitySection;
