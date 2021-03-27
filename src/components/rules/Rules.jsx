import React from 'react'
import Header from '../header/Header';
import { Tabs } from 'antd';
import zhidu from '../../assets/common/zhidu.jpg';
import './Rules.scss';

export default function Rules() {
  const { TabPane } = Tabs;

  return (
    <div className="rules">
      <Header />
      <div className="rulesBanner">
        <img src={zhidu} alt="zhidu" />
      </div>
      <div className="tabs">
        <Tabs defaultActiveKey="1">
          <TabPane tab="总则" key="1" style={{fontSize:'17px', color: '#666'}}>
            <b>第一条</b> &nbsp;&nbsp;&nbsp;
            社团作为一个新生的团体，在学员学习过程中发挥着不可替代的作用。为了完善社团的管理制度，进一步活跃学习气氛，培养综合素质全面发展的人才，特拟订本章程。<br/><br/><b>第二条</b> &nbsp; &nbsp;社团是由我校在籍学生按照自愿的原则组织和参加的群众性组织。社团应遵守四项基本原则，遵守国家法律、法规和校纪、校规的基础等。利用课余时间学习，开阔学习范围。++活动内容+1.发挥桥梁纽带作用，开拓同学们的思维，促进同学之间的友谊。+2.收集社员在学习方面有关问题，定期进行交流、总结，开阔社员的知识方面。+3.根据实际需要，开展其它有益活动。
          </TabPane>
          <TabPane tab="社团成员及管理机构" key="2" style={{fontSize:'17px', color: '#666'}}>
          <b>第一条</b> &nbsp;&nbsp;本社团干部须具备以下基本条件：政治立场坚定，坚持四项基本原则，思想积极上进。热爱社团工作，能严格要求自我，以身作则，在学生中起模范带头作用。工作认真负责、勤奋踏实、能按时保质保量完成所负责的各项任务。作风民主、团结同学、自觉接受监督、勇于开展批评与自我批评。社员要求：一、本社团社员必须具备条件：组织纪律性,奉献精神,整体精神,有加入本社的意愿,对本学习有兴趣的学生 <br/><br/><b>第二条</b> &nbsp;&nbsp;社员入会的程序,提交入社申请。经本社负责机构讨论通过。经登记，即为本社正式社员。
        </TabPane>
          <TabPane tab="社团纪律" key="3" style={{fontSize:'17px', color: '#666'}} >
          <b>第一条</b> &nbsp;&nbsp;社员退社以书面申请为准，四次无故不参加协会活动的，视为自动退会。社员如有严重违反本社章程行为或有严重损害本社团声誉的行为，予以开除。++(若有特殊情况须对正副社长或组长请假)。<br/><br/><b>第二条</b> &nbsp; &nbsp;开社团及部门会议时社员不得迟到、早退、无故不到。若有事有病，须先向部门负责人提前请假，未经请假，迟到早退达5次者、无故缺席3次者，予以处理，情节严重者，予以辞退；社员不得以权谋私，不得以社团名义从事不法活动。一经发现，视情节分别处于警告、批评、辞退；<br/><br/><b>第三条</b> &nbsp; &nbsp;社团团员不交团费，给予开除社团，并给予“警告处分”
        </TabPane>
        </Tabs>
      </div>
    </div>
  )
}
