---
layout: post
title: "其他专利小快报 2026-03-12"
date: 2026-03-12
categories: 其他
---

**New Patents**: 42  

---


<br/>

### 1. 使用屏下摄像头和LED进行眼部和面部追踪的头戴式显示器

**Title (EN)**: EYE AND FACE TRACKING WITH UNDER DISPLAY CAMERA AND LED  
**Pub. No.**: US20260064197

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Zuoqian Wang](https://patents.google.com/?inventor=Zuoqian+Wang&country=US&num=100&sort=new), [Min Tao](https://patents.google.com/?inventor=Min+Tao&country=US&num=100&sort=new), [Anqi Ji](https://patents.google.com/?inventor=Anqi+Ji&country=US&num=100&sort=new)  
**Publication Date**: 05.03.2026

**Abstract**:  
一种用于眼部和面部追踪的头戴式显示器，包括靠近用户眼睛的光学组件、位于光学组件后方且用户通过光学组件视线可见的显示屏面板、设置在显示屏面板内的摄像头（使用户的眼睛通过光学组件对摄像头可见），以及靠近摄像头的光源（使光源的光通过光学组件照射到用户眼睛上）。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260064197_1.png)

**Technical Field (技术领域)**:  
本发明涉及头戴式显示器，特别是用于佩戴头戴式显示器的用户的眼部和面部追踪技术。

**Background (发明背景)**:  
在传统头戴式显示器中，用于眼部和面部追踪的摄像头和LED通常围绕光学镜头布置，或者位于镜头后方但在显示屏面板的前方或外部。这种设计在摄像头和LED的制造和集成方面存在较大挑战。由于摄像头和LED的光线失真，眼部和面部追踪性能并不理想。此外，摄像头和LED的位置可能会干扰显示效果和视觉体验。因此，需要改进摄像头和LED的布局，以提升追踪性能，同时不影响用户体验。

**Summary (发明总览)**:  
本发明提出了一种用于眼部和面部追踪的头戴式显示器系统。该系统包括靠近用户眼睛的光学组件、位于光学组件后方且用户视线可见的显示屏面板、设置在显示屏面板内的摄像头（使用户的眼睛通过光学组件对摄像头可见），以及靠近摄像头的光源（使光源的光通过光学组件照射到用户眼睛上）。系统还包括一个处理器，用于接收摄像头信号并生成眼部和面部追踪数据，并根据这些数据调整实时显示的视频内容。

**Key Innovation (核心创新)**:  
1. 将摄像头和光源集成到显示屏面板内，避免了传统设计中摄像头和LED的干扰问题。2. 通过改进光学组件布局，提升了眼部和面部追踪的准确性。3. 实现了实时视频调整功能，增强了用户的沉浸式体验。

**Application Inference (应用推测)**:  
该技术可广泛应用于虚拟现实（VR）、增强现实（AR）和混合现实（MR）设备中，用于提升用户交互体验、游戏控制、身份识别以及动态内容调整等场景。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US475031010)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260064197)**
<br/><br/>

---


<br/>

### 2. 用于AI生成内容质量评估的用户界面操作跟踪

**Title (EN)**: USER INTERFACE ACTION TRACKING FOR QUALITY EVALUATION OF AI-GENERATED CONTENT  
**Pub. No.**: US20260064521

**Applicant**: Microsoft Technology Licensing, LLC  
**Inventor**: [Kartik MATHUR](https://patents.google.com/?inventor=Kartik+MATHUR&country=US&num=100&sort=new), [Julia Weronika ADAMCZYK](https://patents.google.com/?inventor=Julia+Weronika+ADAMCZYK&country=US&num=100&sort=new)  
**Publication Date**: 05.03.2026

**Abstract**:  
一种AI内容评估方法包括从生成式人工智能（AI）模型接收一组AI生成的指令，这些指令识别了在应用程序中执行任务的步骤，并从交互索引中选择定义与用户界面交互的多个检查点交互。每个检查点交互与AI生成指令中的相应步骤满足相似性度量。该方法进一步包括基于检测到的用户与用户界面的交互，确定用户在观察期内完成的检查点交互的子集，并评估一个指标以计算量化用户执行与任务相关的成功度的质量分数。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260064521_1.png)

**Technical Field (技术领域)**:  
本发明涉及人工智能领域，具体是关于评估生成式AI在应用程序中生成内容质量的技术。

**Background (发明背景)**:  
在当今时代，生成式人工智能（AI）已经取代了人类助手，在各种用户支持任务中发挥作用。许多基于网络的平台使用AI驱动的聊天机器人作为服务支持、账户支持和技技术支持的主要机制。在这些和其他场景中，AI被用来生成提供给最终用户的内容，通常无需经过人工管理员的审核。例如，应用程序可能包含一个接受自然语言输入的帮助搜索栏。应用程序会将输入到帮助搜索栏的内容传递给大型语言模型（LLM）或其他训练好的（例如，专门的、小规模的）模型，然后动态生成内容并由应用程序响应用户查询。尽管AI在某些场景下可能有效，但应用程序或服务提供商很难评估这些生成式AI帮助工具在不同使用场景下的表现。很少有元数据系统能够促进对AI生成内容的有效评估，这使得服务提供商难以改进严重依赖生成式AI工具的服务。

**Summary (发明总览)**:  
本发明提出了一种评估AI生成内容的方法。该方法包括从生成式AI模型接收一组AI生成的指令，这些指令识别了应用程序中执行任务的步骤，并从交互索引中选择与用户界面交互的多个检查点交互。每个检查点交互与AI生成指令中的相应步骤满足相似性度量。该方法进一步包括基于检测到的用户与应用程序用户界面的交互，确定用户在观察期内完成的检查点交互的子集，并评估一个指标以量化用户执行任务的成功度。该指标取决于用户在观察期内完成的检查点交互的子集。该方法还提供了在确定指标满足低质量标准时生成并发送质量警报的功能。在一个实现中，质量警报包括AI生成的指令集和生成式AI模型用于生成AI生成指令的输入查询。

**Key Innovation (核心创新)**:  
1. 通过用户界面交互跟踪来评估AI生成内容的质量。2. 使用相似性度量选择与AI生成指令相关的检查点交互。3. 根据用户完成的任务步骤生成质量警报以改进AI生成内容。

**Application Inference (应用推测)**:  
本发明可应用于各种需要AI生成内容的服务场景，如客户服务、在线教育和技术支持等，帮助服务提供商更好地评估和改进AI生成内容的质量。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US475031369)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260064521)**
<br/><br/>

---


<br/>

### 3. 可穿戴计算设备的瞬时压力算法

**Title (EN)**: Momentary Stress Algorithm for a Wearable Computing Device  
**Pub. No.**: US20260060578

**Applicant**: Google LLC  
**Inventor**: [Samy Ahmed Mansour Abdel-Ghaffar](https://patents.google.com/?inventor=Samy+Ahmed+Mansour+Abdel-Ghaffar&country=US&num=100&sort=new), [Conor Joseph Heneghan](https://patents.google.com/?inventor=Conor+Joseph+Heneghan&country=US&num=100&sort=new), [Lindsey Michelle Sunden](https://patents.google.com/?inventor=Lindsey+Michelle+Sunden&country=US&num=100&sort=new)  
**Publication Date**: 05.03.2026

**Abstract**:  
一种监测用户压力的方法包括接收来自可穿戴计算设备多个生物传感器电极的多个时间序列数据输入。这些时间序列数据输入包括连续的皮电活动数据和至少一种心率数据、皮肤温度数据和心率变异性数据。该方法还包括使用一系列滤波技术顺序处理时间序列数据输入。此外，该方法包括根据接收到的数据输入类型从多个模型中选择一个模型，以计算用户某一时刻的生理反应指标。因此，所选模型被定制为在计算中使用所有时间序列数据输入。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260060578_1.png)

**Technical Field (技术领域)**:  
本发明涉及可穿戴计算设备，特别是用于监测用户瞬时压力的算法。

**Background (发明背景)**:  
随着技术的进步，包括消费设备中的技术进步，健康检测和监测技术也取得了相应的发展。例如，生物监测设备（如健身追踪器和智能手表）能够确定佩戴者的脉搏或运动信息。某些生物监测设备配备了多种传感器，用于测量对用户有益的多个生物参数，如心率传感器、与心电图（ECG）和皮电活动（EDA）应用兼容的多用途电传感器、红外传感器、陀螺仪、高度计、加速度计、温度传感器、环境光传感器、Wi-Fi、GPS、振动传感器、扬声器和麦克风等。例如，某些生物监测设备使用多路径电传感器测量用户的皮肤EDA反应。这些反应表现为皮肤电导的敏感电变化，通常通过湿电极或干电极系统在用户的掌心或指尖检测。典型的EDA反应可以通过至少两个电极在掌心或指尖测量，其中皮肤电导是通过测量的电抗计算的。EDA反应表现为皮肤电导的瞬态成分——皮肤电导反应（SCR），通过识别与背景稳态测量（皮肤电导水平SCL）相比的皮肤电导瞬时峰值来检测。通常，由于这些区域汗腺密度高，SCR从用户掌心或指尖收集的数据中观察更为准确。尽管在文献中已经全面报道了在掌心或指尖检测SCR以评估压力，但单独的SCL对评估用户的压力也很有帮助。通过测量连续的皮电活动（cEDA），SCL可以用来观察身体的急性压力事件反应等特定生物事件。然而，如果使用安装在生物监测设备顶面的电极进行cEDA测量，评估急性压力事件是具有挑战性的，因为cEDA需要持续的皮肤接触才能提供准确的读数（即要求用户在测量期间将皮肤定位在电极表面）。因此，cEDA电极被定位在生物监测设备的底面（面向皮肤的一侧），以促进与皮肤的持续接触，并不需要频繁的用户输入来促进连续的EDA测量。更具体地说，就时间而言，SCL和SCR的主要区别在于SCR发生在秒级的时间尺度上，而SCL则在秒、分钟、小时和/或天的尺度上进行评估。例如，图1展示了EDA幅度随时间变化的图形表示。如图所示，图形提供了瞬态皮肤电导成分（SCR）的峰值与稳态皮肤电导成分（SCL）的比较。因此，准确检测SCL的变化需要连续测量（超过秒/分钟/小时/天等），并且——无论是否检测到SCR——都可以用于评估生理压力。因此，能够连续测量EDA以准确检测瞬时或急性压力事件并将此类事件显示给用户的可穿戴计算设备将在该领域受到欢迎。此外，其他传感器（例如光电容积描记图数据（如幅度）、加速度计数据等）的输入可以为评估急性压力事件及其向用户显示提供额外的上下文。

**Summary (发明总览)**:  
本发明提供了一种使用可穿戴计算设备监测用户压力的方法。该方法包括通过与可穿戴设备通信连接的处理器接收来自多个生物传感器电极的多个时间序列数据输入。这些数据包括用户的连续皮电活动数据以及心率数据、皮肤温度数据和心率变异性数据中至少一种。随后，使用一系列滤波技术顺序处理这些数据，并根据接收到的数据类型选择合适的模型。最后，将选定的模型应用于处理后的数据，以计算用户某一时刻的生理反应指标。如果该指标超过设定的阈值，设备将控制其功能以响应压力事件。

**Key Innovation (核心创新)**:  
1. 结合多种生物传感器数据（如皮电活动、心率、皮肤温度等）以提高压力检测的准确性。2. 通过连续监测和高级滤波技术，实现对瞬时压力事件的准确识别。3. 设备能够根据压力指标自动调整功能，提供个性化的用户反馈。

**Application Inference (应用推测)**:  
该技术可应用于健康监测设备，如智能手表和健身追踪器，帮助用户实时了解和管理压力水平。此外，它还可以用于工作场所压力管理、运动员训练监测以及心理健康应用中，为用户提供个性化的健康建议和干预措施。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US475031185)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260060578)**
<br/><br/>

---


<br/>

### 4. 双棱镜光学图像稳定

**Title (EN)**: DUAL PRISM OPTICAL IMAGE STABILIZATION  
**Pub. No.**: US20260063920

**Applicant**: Google LLC  
**Inventor**: [Hyuk Jae Choi](https://patents.google.com/?inventor=Hyuk+Jae+Choi&country=US&num=100&sort=new), [Dansik Yoo](https://patents.google.com/?inventor=Dansik+Yoo&country=US&num=100&sort=new), [Zhenhong Fu](https://patents.google.com/?inventor=Zhenhong+Fu&country=US&num=100&sort=new)  
**Publication Date**: 05.03.2026

**Abstract**:  
相机包括图像传感器、用于将光线聚焦到图像传感器的镜头、第一个棱镜、用于绕第一轴旋转第一个棱镜的第一个致动器、第二个棱镜，以及用于绕第二轴旋转第二个棱镜的第二个致动器。第二轴与第一轴大致垂直。相机还包括一个控制器，用于通过独立控制第一个致动器绕第一轴旋转第一个棱镜和控制第二个致动器绕第二轴旋转第二个棱镜来执行光学图像稳定（OIS）。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260063920_1.png)

**Technical Field (技术领域)**:  
本发明涉及相机光学系统领域，特别是通过双棱镜实现光学图像稳定的技术。

**Background (发明背景)**:  
目前电子产品的相机光学系统通常通过单个棱镜绕两个轴旋转来实现光学图像稳定。然而，单棱镜的光学图像稳定可能会导致两个轴之间的干扰或串扰。

**Summary (发明总览)**:  
本发明提出了一种具有光学图像稳定（OIS）的相机镜头设计，包括一个或多个镜头元件和至少两个棱镜元件。第一个棱镜可绕第一轴旋转，第二个棱镜可绕第二轴旋转，第二轴与第一轴大致垂直。这两个棱镜可以独立旋转，能够在垂直或正交方向上扫描图像，而不会在两个方向之间产生干扰。本发明提供的技术、系统及镜头具有以下优点：实现无干扰的垂直方向独立控制扫描，使扫描量的确定更加简单、快速和准确；提供更大的可用传感器区域用于图像捕获；并允许相机镜头具有更长的总轨道长度（TTL），从而为长焦镜头系统提供更大的灵活性。

**Key Innovation (核心创新)**:  
1. 采用双棱镜设计，实现两个轴向的独立旋转控制，避免了传统单棱镜的轴间干扰问题。2. 提供更精确、快速的光学图像稳定效果，并允许更灵活地调整镜头系统的有效焦距。3. 增加了相机镜头的总轨道长度，为长焦镜头提供了更大的设计空间。

**Application Inference (应用推测)**:  
该技术可广泛应用于需要高精度图像稳定功能的相机系统，如智能手机相机、专业摄影设备以及监控摄像头等，尤其适用于对图像质量和稳定性要求较高的应用场景。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US475030703)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260063920)**
<br/><br/>

---


<br/>

### 5. 单重复编织面板

**Title (EN)**: SINGLE REPEAT WOVEN PANEL  
**Pub. No.**: US20260062840

**Applicant**: Microsoft Technology Licensing, LLC  
**Inventor**: [Kelly Marie BOGAN](https://patents.google.com/?inventor=Kelly+Marie+BOGAN&country=US&num=100&sort=new)  
**Publication Date**: 05.03.2026

**Abstract**:  
一种用于计算设备的编织面板，其编织图案的重复尺寸大于25厘米×25厘米。该编织图案的线密度至少为每平方厘米25根线×25根线。该编织面板与计算设备集成，并根据计算设备的具体要求进行定制，从而提升了计算设备的视觉美感和触觉体验。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260062840_1.png)

**Technical Field (技术领域)**:  
本发明涉及计算设备，特别是用于改善计算设备表面材料的技术领域，例如通过使用具有特定编织图案和耐用性的纺织面料来增强设备的触感和外观。

**Background (发明背景)**:  
计算设备，尤其是移动计算设备，通常采用特定表面材料进行设计。这些材料包括金属，如铝、钢、钛等。在某些情况下，表面材料可能包括纺织品或织物，例如挤出织物、非织造布、针织物或机织物。

**Summary (发明总览)**:  
本发明提供了一种用于覆盖计算设备输入表面的编织织物面板。该面板包括一个手掌托区域，其触感基于手掌托区域采用的高蓬松且不规则编织图案；一个开孔区域，包含从编织织物面板上切割出的多个键位开孔；以及一个边缘区域，切割至编织织物面板的边缘，具有防磨损特性。在一些实施例中，键位开孔区域由于使用了比手掌托区域和边缘区域更细的线径而具有防磨损特性，而边缘区域则由于具有比开孔区域和手掌托区域更高的线密度而具有防磨损特性。

**Key Innovation (核心创新)**:  
1. 采用高蓬松且不规则编织图案来提升手掌托区域的触感和舒适度。2. 通过调整不同区域的线径和密度，实现关键区域（如键位开孔和边缘）的防磨损特性。3. 将编织面板与计算设备集成，兼顾功能性和美观性。

**Application Inference (应用推测)**:  
该技术可以应用于笔记本电脑、平板电脑和其他需要改善用户输入体验的计算设备，尤其适合注重外观和触感的消费电子产品。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US475029504)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260062840)**
<br/><br/>

---


<br/>

### 6. 使用人工智能提供个性化活动指导的系统和方法

**Title (EN)**: SYSTEMS AND METHODS OF PROVIDING PERSONALIZED ACTIVITY GUIDANCE USING AN ARTIFICIAL INTELLIGENCE  
**Pub. No.**: US20260064345

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Nicholas Wallen](https://patents.google.com/?inventor=Nicholas+Wallen&country=US&num=100&sort=new), [Benjamin Neal Bethurum](https://patents.google.com/?inventor=Benjamin+Neal+Bethurum&country=US&num=100&sort=new), [Willy Huang](https://patents.google.com/?inventor=Willy+Huang&country=US&num=100&sort=new)  
**Publication Date**: 05.03.2026

**Abstract**:  
本发明公开了使用人工智能提供个性化运动智能的系统和方法。一个示例方法包括，当用户佩戴头戴式设备进行体育活动时，通过一个或多个传感器获取用户感测到的传感器数据，该传感器数据包括至少生物特征数据和体育活动数据。该方法还包括，在检测到用户正在执行体育活动的指示时，启动一个人工智能（AI）代理。该方法还包括基于传感器数据确定是否满足一个或多个基于活动的阈值，并根据确定满足基于活动的阈值，由AI代理生成指导消息以帮助用户。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260064345_1.png)

**Technical Field (技术领域)**:  
本发明涉及与人工智能代理交互的方法，特别是利用可穿戴设备中的人工智能代理来增强用户体验。

**Background (发明背景)**:  
尽管人工智能以多种方式被使用，但商业化的人工智能通常只能以不方便的方式访问，例如在网站上与人工智能互动或接收与互联网搜索相关的AI生成内容。这些方式存在缺点，因为它们将用户对AI生成内容的体验限制在非常孤立的体验中，并且用户访问或与AI互动时负担较重。因此，需要解决上述一个或多个挑战。

**Summary (发明总览)**:  
本发明描述了一种可穿戴设备，该设备能够根据用户的活动生成个性化的指导。例如，头戴式设备包括显示屏、传感器和程序。程序在检测到AI代理触发条件时，向AI代理提供设备获取的传感器数据。AI代理基于传感器数据确定基于上下文的活动，并生成基于该活动的个性化指导，包括推荐执行该活动的操作。随后，设备会展示这些指导。此外，本发明还包括一种方法和存储在计算机可读介质中的指令，用于实现上述功能。

**Key Innovation (核心创新)**:  
1. 通过可穿戴设备实时获取用户活动数据并进行分析。2. 利用AI代理生成个性化的活动指导，并提供即时的反馈和建议。3. 在用户的视野范围内展示指导信息，提升用户体验。

**Application Inference (应用推测)**:  
该技术可以应用于运动健身、智能眼镜、虚拟现实和增强现实设备等领域，帮助用户更高效地完成各种活动，如运动训练、户外探险或日常健身。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US475031173)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260064345)**
<br/><br/>

---


<br/>

### 7. 微型条纹投影仪

**Title (EN)**: MINIATURIZED FRINGE PROJECTORS  
**Pub. No.**: US20260064199

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Alexandra Gualdino](https://patents.google.com/?inventor=Alexandra+Gualdino&country=US&num=100&sort=new), [Hod Finkelstein](https://patents.google.com/?inventor=Hod+Finkelstein&country=US&num=100&sort=new), [Chandra Sekhar Kakani](https://patents.google.com/?inventor=Chandra+Sekhar+Kakani&country=US&num=100&sort=new)  
**Publication Date**: 05.03.2026

**Abstract**:  
本文描述了一种在增强现实设备中进行眼动追踪的照明系统的方法。该照明系统包括激光光源、波导、相位调节元件和发射孔径。该方法包括通过一个或多个激光光源发射激光光。通过一个或多个波导接收来自相应激光光源的激光光，使得激光光沿着第一光学路径和第二光学路径传播。通过相位调节元件调整第一光学路径中的相位，使得第一光学路径中的相位与第二光学路径中的相位不同。并且通过至少第一和第二发射孔径输出第一和第二光学路径中的激光光，以形成条纹照明图案。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260064199_1.png)

**Technical Field (技术领域)**:  
本发明涉及用于从光源投射图案的投影仪，特别是用于增强现实设备中进行眼动追踪的照明系统，该系统包含微型条纹投影仪。

**Background (发明背景)**:  
使用包含波导的投影系统进行眼动追踪是一种有效的方法，可以确定用户的注视方向。眼动追踪对扩展现实设备有益，因为扩展现实内容通常不局限于用户视野内的一个相对较小的矩形显示屏。常见的微型照明系统使用垂直腔面发射激光器（VCSEL），但这种眼动追踪系统体积较大，会降低用户体验，因为依赖光学元件来塑造VCSEL发射会导致设备尺寸增加，并在对尺寸要求严格的场景中限制了微型化。因此，需要解决上述一个或多个问题。

**Summary (发明总览)**:  
本发明提出了一种使用垂直腔面发射激光器实现微型条纹图案照明的方法，这些激光器可以与光学元件结合，实现小型化下的准直和衍射。此外，生成定制化的照明图案对于支持基于结构光的机器视觉系统是必要的。一些实施例描述了动态可调的照明图案，这可以提高计算机视觉系统中物体检测的准确性，并支持高级算法的使用。一些实施例还描述了使用更小周期的条纹图案可以改善近场传感，这超越了传统微型照明系统常用的线间距。提出的照明器概念可以支持更先进眼动追踪算法，从而提升输入系统的性能。最终产品将具有更小尺寸和重量，从而提供更高效和更佳的用户体验。在某些实施例中，可以通过改变发射源的光学特性来动态调节照明图案。

**Key Innovation (核心创新)**:  
1. 使用垂直腔面发射激光器实现微型化条纹投影仪。2. 通过相位调节实现动态可调的照明图案，提高物体检测精度。3. 采用更小周期的条纹图案改善近场传感性能。

**Application Inference (应用推测)**:  
该技术可广泛应用于增强现实（AR）、混合现实（MR）设备、智能眼镜、智能手表等可穿戴设备，以及需要精确眼动追踪和近场传感的其他领域，如虚拟现实（VR）、人机交互系统和高级机器视觉应用。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US475031012)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260064199)**
<br/><br/>

---


<br/>

### 8. 在增强现实头戴设备上呈现路线导航的方法及相关设备和系统

**Title (EN)**: METHODS FOR PRESENTING ROUTE GUIDANCE AT AN AUGMENTED REALITY HEADSET AND DEVICES AND SYSTEMS THEREOF  
**Pub. No.**: US20260063439

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Ata Dogan](https://patents.google.com/?inventor=Ata+Dogan&country=US&num=100&sort=new), [Dominic Vincent Aratari](https://patents.google.com/?inventor=Dominic+Vincent+Aratari&country=US&num=100&sort=new), [Tung Him Karpenko](https://patents.google.com/?inventor=Tung+Him+Karpenko&country=US&num=100&sort=new)  
**Publication Date**: 05.03.2026

**Abstract**:  
一种示例方法包括：在增强现实（AR）头戴设备的AR显示器上显示一个扩展现实（XR）地图增强效果，该效果包括第一组XR地标。AR头戴设备在物理环境中具有第一方向，第一组XR地标被呈现给佩戴者，使得第一组XR地标覆盖通过AR显示器看到的物理环境中的相应第一组物理地标。当检测到AR头戴设备的方向从第一方向变为物理环境中的第二方向时，方法还包括显示地图XR增强效果以包括第二组XR地标。第二组XR地标被呈现给佩戴者，使得第二组XR地标覆盖通过AR显示器看到的物理环境中的相应第二组物理地标。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260063439_1.png)

**Technical Field (技术领域)**:  
本发明主要涉及在增强现实（AR）头戴设备（例如AR眼镜）上呈现地图导航扩展现实（XR）增强效果的技术领域。

**Background (发明背景)**:  
目前，移动设备（如手机和车载设备）上的地图应用已经非常普遍，并在使用过程中为用户提供导航指引。然而，这些应用需要用户分散注意力去查看设备屏幕，这在需要集中注意力的场景下（例如步行穿越繁忙的十字路口或驾驶车辆时）可能会带来问题。此外，现有的导航辅助系统大多基于二维显示器呈现信息，而仅依靠音频用户界面通常无法提供足够的细节来引导用户沿着路线前进。因此，二维显示器容易分散用户注意力，在某些情况下（例如用户驾驶时）可能带来危险。因此，需要一种解决方案来应对上述挑战。

**Summary (发明总览)**:  
本发明提出在增强现实头戴设备的显示器上显示地图增强效果，以解决现有导航方式分散注意力的问题。通过在AR头戴设备上提供地图增强效果，路线指引可以直接呈现在用户的视线中，从而提高导航效率。用户无需再查看其他设备，方向指引会根据周围环境和用户的方向实时调整并始终可见。此外，本发明还描述了使用肌电图（EMG）、AR头戴设备上始终可用的显示器以及人工智能助手等输入组合，快速高效地访问和管理路线指引的方法。例如，人工智能系统可以自动在无需人工干预的情况下，根据用户路径或查看的地点启动路线指引。同时，地图视图的呈现是自然且空间化的，即随着佩戴者移动，地图信息会实时更新。此外，用户还可以通过空间音频接收音频指引，方向指引仿佛来自指引的目的地（例如，“向左转”会感觉来自用户的左侧）。本发明还描述了用户可以通过主动通知（例如由AI助手触发的通知，判断是否需要提供指引）来调用导航辅助的场景。

**Key Innovation (核心创新)**:  
1. 在AR头戴设备上直接显示地图导航，增强用户获取路线指引的效率和便捷性。2. 通过空间音频和实时地图更新，提供更自然和直观的导航体验。3. 利用AI助手和多种输入方式，实现智能化的导航辅助。

**Application Inference (应用推测)**:  
本发明可广泛应用于需要导航辅助的各种场景，例如步行导航、驾驶导航、骑行导航等。它特别适用于需要解放双手或保持环境感知的情境，如户外运动、驾驶车辆或执行复杂任务时。此外，该技术还可以用于增强现实游戏、虚拟旅游和智能城市导航等领域。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US475030169)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260063439)**
<br/><br/>

---


<br/>

### 9. 基于激光的移动计算设备环境感知

**Title (EN)**: Laser-Based Ambient Sensing for Mobile Computing Devices  
**Pub. No.**: US20260060562

**Applicant**: Google LLC  
**Inventor**: [Octavio Ponce Madrigal](https://patents.google.com/?inventor=Octavio+Ponce+Madrigal&country=US&num=100&sort=new), [Michal Matuszak](https://patents.google.com/?inventor=Michal+Matuszak&country=US&num=100&sort=new)  
**Publication Date**: 05.03.2026

**Abstract**:  
本发明提供了计算系统、计算设备和计算机实现的方法。在一个方面中，移动计算设备包括基于激光的传感器，例如图像捕捉组件中的激光检测自动对焦传感器，该组件具有图像捕捉设备。移动计算设备还包括一个或多个配置用于执行一个或多个操作的计算设备。例如，这些操作可以包括使用移动计算设备的一个或多个基于激光的传感器在一段时间内生成指示移动计算设备与至少一个表面之间距离的传感器数据，以及基于传感器数据使用一个或多个机器学习模型生成包括与移动计算设备用户相关的至少一个生物特征的环境感知数据。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260060562_1.png)

**Technical Field (技术领域)**:  
本发明涉及移动计算设备领域，具体关注利用激光传感器进行环境感知的技术。

**Background (发明背景)**:  
传统的计算设备可以通过多种传感器监测和检测用户健康相关的信息，例如跟踪用户的活动或生物特征。这些传感器收集的数据经过分析后，可以为用户提供诸如皮肤温度估算、日行距离、心率、睡眠时间等信息。随着对设备上功能需求的增加，现有组件需要被重新利用，以提供更多的设备内感知功能。

**Summary (发明总览)**:  
本发明提出了一种利用移动计算设备中的激光传感器进行环境感知的方法。设备通过激光传感器收集用户周围环境的数据，例如与物体表面的距离，并使用机器学习模型分析这些数据以提取生物特征信息，如呼吸频率等。这种方法利用了设备中已有的硬件组件，扩展了设备的功能，使其能够提供更丰富的用户健康和环境信息。

**Key Innovation (核心创新)**:  
1. 利用激光传感器收集环境数据并分析用户生物特征。2. 通过机器学习模型处理传感器数据，实现更精准的环境感知。3. 在现有硬件基础上扩展了设备的功能，提供更多健康和环境相关的信息。

**Application Inference (应用推测)**:  
该技术可以应用于健康监测领域，例如通过分析用户的呼吸模式来跟踪睡眠质量或压力水平。此外，它还可以用于智能家居，通过感知用户周围环境的变化来优化设备功能，如自动调节照明或温度。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US475031008)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260060562)**
<br/><br/>

---


<br/>

### 10. 在增强现实眼镜上通过人工智能生成扩展现实增强内容的方法及其系统和设备

**Title (EN)**: METHODS OF SURFACING XR AUGMENTS GENERATED BY ARTIFICIAL INTELLIGENCE AT AUGMENTED REALITY GLASSES, AND SYSTEMS AND DEVICES THEREOF  
**Pub. No.**: US20260065605

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Ata Dogan](https://patents.google.com/?inventor=Ata+Dogan&country=US&num=100&sort=new), [Christopher E. Balmes](https://patents.google.com/?inventor=Christopher+E.+Balmes&country=US&num=100&sort=new), [Jonathan Faunce](https://patents.google.com/?inventor=Jonathan+Faunce&country=US&num=100&sort=new)  
**Publication Date**: 05.03.2026

**Abstract**:  
一种示例方法包括在增强现实（AR）头戴设备上接收开放式查询，并响应于接收该查询：通过人工智能（AI）基于AR头戴设备的摄像头提供的第一数据确定开放式查询的第一上下文；并在AR头戴设备上输出基于开放式查询和第一上下文的第一响应。AR头戴设备的输出模式基于第一响应中包含的第一信息进行选择。该方法还包括响应于接收开放式查询：通过AI基于增强现实头戴设备的摄像头提供的第二数据确定开放式查询的第二上下文，其中第一数据与第二数据不同；并在AR头戴设备上输出基于开放式查询和第二上下文的第二响应，其中AR头戴设备的输出模式基于第二响应中包含的第二信息进行选择。执行所述方法和操作的指令可以存储在非易失性计算机可读存储介质上。非易失性计算机可读存储介质可以包含在单个电子设备中，也可以分布在系统的多个电子设备上。可以单独或组合执行所述方法和操作的电子设备列表包括扩展现实（XR）头戴设备（例如，混合现实（MR）头戴设备或增强现实（AR）头戴设备）、腕戴设备、中间处理设备、智能织物服装等。例如，指令可以存储在AR头戴设备上，或者可以存储在AR头戴设备和相关输入设备（例如，腕戴设备）的组合上，以便在输入设备上执行检测输入操作的指令，并在AR头戴设备上执行响应这些输入操作而改变显示用户界面的指令。所述设备和系统可以配置为与提供XR体验的方法和操作结合使用。提供XR体验的方法和操作可以存储在非易失性计算机可读存储介质上。说明书描述的特征和优点不一定全面，特别是某些附加特征和优点对于本领域普通技术人员来说，通过附图、说明书和权利要求书将是显而易见的。此外，应当指出，说明书中的语言主要是为了可读性和教学目的而选择的。在总结了上述示例方面之后，现在将简要介绍附图。为了更好地理解各种描述的实施方案，应参考下面的详细说明以及附图，其中相同的参考符号指代贯穿附图的相应部分。图1显示了根据某些实施方案的图3中描述的XR增强内容的详细视图。图2A至2D根据某些实施方案示出了AI系统在响应用户提供的开放式查询（例如，语音命令）时呈现用户界面的实施方案。图3根据某些实施方案显示了基于用户的开放式查询可以呈现给用户的不同XR增强内容。图4根据某些实施方案示出了开放式查询的处理方式以及信息呈现的高级分解。图5根据某些实施方案示出了AI可以自动准备的不同的AR增强小部件示例。图6根据某些实施方案示出了AI可以自动生成并在AR头戴设备上呈现的众多不同XR增强内容的示例。图7根据某些实施方案示出了接收开放式查询并基于开放式查询提供响应的方法的流程图。图8A、8B、8C-1和8C-2根据某些实施方案示出了MR和AR系统的示例。根据通用做法，附图中显示的各种特征可能未按比例绘制。因此，各种特征的尺寸可以任意扩大或缩小以便于清晰。此外，某些附图可能未描绘给定系统、方法或设备的所有组件。最后，相同的参考符号可能用于表示贯穿说明书和附图的类似特征。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260065605_1.png)

**Technical Field (技术领域)**:  
本发明主要涉及利用人工智能生成对增强现实（AR）头戴设备接收的开放式查询的响应，其中这些响应至少部分依赖于AR头戴设备的一个或多个传感器的数据。

**Background (发明背景)**:  
随着头戴式设备的功能越来越丰富，与它们的交互可能会变得更加耗时和困难。用户需要浏览更多界面才能达到预期结果，或者可能会感到沮丧，无法充分利用头戴式设备的所有功能。此外，虽然有时可以使用基于手的输入，但它们往往比类似的触摸屏显示设备更难操作且功能较少。因此，需要解决上述一个或多个挑战，例如找到与AR设备可用功能进行高效、无障碍交互的方式。

**Summary (发明总览)**:  
本发明提出了一种方法，通过人工智能（AI）处理AR头戴设备接收的开放式查询，并基于设备传感器数据生成响应。AI首先根据摄像头数据确定查询的上下文，然后输出相应的响应，并根据响应内容选择合适的输出模式。如果需要，AI会进一步分析新的传感器数据，调整上下文并提供更精确的响应。指令可以存储在单个设备或多个设备上，例如AR头戴设备和腕戴设备，以实现输入检测和用户界面更新的协同工作。

**Key Innovation (核心创新)**:  
1. 通过AI实时分析AR设备传感器数据，动态生成对开放式查询的响应。2. 根据响应内容智能选择输出模式，提升交互体验。3. 结合多源数据（如摄像头输入）不断优化查询上下文，提高响应准确性。

**Application Inference (应用推测)**:  
该技术可广泛应用于需要与现实环境实时交互的场景，如智能导航、虚拟助手、远程协作等。它能帮助用户更高效地获取信息并完成任务，尤其适合在复杂环境中使用AR设备。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US475032570)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260065605)**
<br/><br/>

---


<br/>

### 11. 虚拟会议中缺席用户交互

**Title (EN)**: ABSENT USER INTERACTION DURING A VIRTUAL MEETING  
**Pub. No.**: US20260067424

**Applicant**: Google LLC  
**Inventor**: [Anton Volkov](https://patents.google.com/?inventor=Anton+Volkov&country=US&num=100&sort=new), [Felix David Mejia Abreu](https://patents.google.com/?inventor=Felix+David+Mejia+Abreu&country=US&num=100&sort=new), [Justin Volz](https://patents.google.com/?inventor=Justin+Volz&country=US&num=100&sort=new)  
**Publication Date**: 05.03.2026

**Abstract**:  
一种方法包括获取受邀参与虚拟会议的第一用户的输入。该输入表明第一用户请求通过代理参加虚拟会议，并提供将在会议中讨论的第一数据。该方法包括在虚拟会议期间呈现的虚拟会议用户界面中包含对应于第一用户的第一区域。第一区域包括至少部分第一数据。该方法包括在虚拟会议期间讨论第一数据时，检测到需要执行的任务的指示，并生成识别该任务的提示作为生成式AI模型的输入。该方法包括在虚拟会议用户界面中呈现与任务相关的第二数据。第二数据基于生成式AI模型的输出。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260067424_1.png)

**Technical Field (技术领域)**:  
本发明涉及虚拟会议技术领域，具体关注虚拟会议中缺席用户的交互方式。

**Background (发明背景)**:  
虚拟会议通常通过虚拟会议平台在多个参与者之间进行。该平台提供工具，让多个客户端设备通过网络连接，并共享彼此的音频（如通过客户端设备麦克风录制的用户声音）和/或视频流（如通过客户端设备摄像头或屏幕图像捕获的视频），以实现高效沟通。为此，虚拟会议平台提供一个用户界面，其中包含多个区域，用于呈现每个参与客户端设备的视频流。

**Summary (发明总览)**:  
本发明提供了一种方法，用于在虚拟会议中处理缺席用户的交互。该方法包括获取受邀参与虚拟会议的第一用户的输入，指示其请求通过代理参加会议，并提供将在会议中讨论的数据。系统会在会议期间呈现的界面中为该用户创建一个区域，并显示部分数据。在讨论这些数据时，系统会检测到需要执行的任务，并生成提示输入生成式AI模型。然后，系统会在会议界面中呈现与任务相关的第二数据，这些数据基于AI模型的输出。

**Key Innovation (核心创新)**:  
1. 通过代理方式让缺席用户参与虚拟会议并提供数据。2. 利用生成式AI模型自动识别任务并生成相关数据。3. 在会议界面中动态展示AI生成的数据，提升会议效率和用户体验。

**Application Inference (应用推测)**:  
该技术可以应用于企业远程会议、在线协作平台以及需要多方参与的虚拟活动。它能帮助缺席用户通过代理和AI技术有效参与会议，同时减轻会议主持人的负担，提高整体沟通效率。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US475034588)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260067424)**
<br/><br/>

---


<br/>

### 12. 基于事件的录制

**Title (EN)**: Event Based Recording  
**Pub. No.**: US20260067419

**Applicant**: Google LLC  
**Inventor**: [John Jordan Nold](https://patents.google.com/?inventor=John+Jordan+Nold&country=US&num=100&sort=new), [Joe Delone Venters](https://patents.google.com/?inventor=Joe+Delone+Venters&country=US&num=100&sort=new), [Liana Kong](https://patents.google.com/?inventor=Liana+Kong&country=US&num=100&sort=new)  
**Publication Date**: 05.03.2026

**Abstract**:  
一种电子设备包括图像传感器、一个或多个处理器以及存储指令的存储器，用于接收基于电子设备配置数据的录制事件配置文件，该配置数据包括位置类型或电源类型；接收由图像传感器捕获的场景的多个图像；基于场景的多个图像中的一个或多个检测触发事件；在检测到触发事件后，识别场景的多个图像中的一个或多个图像中的感兴趣对象；根据包含感兴趣对象的存储图像创建事件片段，其中创建事件片段包括根据录制事件配置文件配置片段长度；并提供事件片段以供显示。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260067419_1.png)

**Technical Field (技术领域)**:  
本发明涉及电子设备领域，特别是能够提供与感兴趣事件相关的视频片段，同时节省电力和带宽的摄像头和电子助手设备。

**Background (发明背景)**:  
随着流媒体设备的普及，对带宽的需求不断增加，导致带宽限制成为一个问题。例如，一个配备安全摄像头和流媒体娱乐服务的小型家庭可能会轻易耗尽互联网服务提供商设定的每月带宽配额，尤其是当这些设备全天候传输高清视频数据时。此外，流媒体也是一个耗电的过程，这不仅会增加电费，还会使设备难以缩小尺寸并变得便携。随着电子设备变得更加紧凑和移动，持续支持耗电的流媒体过程变得困难。

**Summary (发明总览)**:  
本发明提出了一种更高效、更准确、更直观的流媒体系统和方法，以节省带宽和电力，同时减少对设备功能的影响。该系统使用动态公式，根据设备的放置位置、预期用途以及设备对周围环境的适应情况来调整操作参数。这些参数包括录制前后的时间长度（填充值）、事件结束前的等待时间（不活动阈值）、事件的最大持续时间（最大事件长度）、连续对象检测的冷却时间（冷却值）以及对象过滤和优先级设置。这些参数基于设备的位置、用途和类型（如有线或电池供电）进行调整，以优化设备的功能性操作。

**Key Innovation (核心创新)**:  
1. 通过动态公式调整录制参数，实现更智能的设备操作。2. 结合设备位置、用途和类型，优化录制策略以节省带宽和电力。3. 提供灵活的配置选项，确保在减少资源消耗的同时不遗漏重要事件。

**Application Inference (应用推测)**:  
该技术可广泛应用于家庭安全、智能家居、便携式摄像设备等领域，帮助用户在节省电力和带宽的同时，不错过关键事件。它特别适用于需要长时间运行且对资源消耗敏感的应用场景。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US475034582)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260067419)**
<br/><br/>

---


<br/>

### 13. 环境设备状态内容显示

**Title (EN)**: Ambient device state content display  
**Pub. No.**: US12567416

**Applicant**: Amazon Technologies, Inc.  
**Inventor**: [Guoning Hu](https://patents.google.com/?inventor=Guoning+Hu&country=US&num=100&sort=new), [Michael Hart](https://patents.google.com/?inventor=Michael+Hart&country=US&num=100&sort=new), [Seth Brickman](https://patents.google.com/?inventor=Seth+Brickman&country=US&num=100&sort=new)  
**Publication Date**: 03.03.2026

**Abstract**:  
本发明通常描述了用于在第一时间段内语音处理设备处于环境状态时发送第一指令以使设备输出第一内容的方法。接收到第一反馈数据表明在第一时间请求了与第一内容相关的第一操作。确定第一时间是在第一时间段内。基于当前设备的定时数据，确定第二内容，该内容至少部分基于在第一时间段内请求的第一操作和定时数据。发送第二指令以使设备在第二时间段内处于环境状态时输出第二内容。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US12567416_1.png)

**Technical Field (技术领域)**:  
本发明涉及语音识别和语音控制技术领域，具体关注在设备处于环境状态时如何根据用户操作和设备状态动态显示内容。

**Background (发明背景)**:  
语音识别和语言处理技术使得计算设备能够根据用户的语音指令来检索和处理命令。在一些系统中，语音识别和语音控制设备通过检测特定的唤醒词来激活。用户的语音请求被转换为可执行的指令，然后执行这些指令以完成相应的任务。这种语音处理和语音控制被广泛应用于个人电脑、手持设备、电话计算机系统等多种计算设备中，以改善人机交互并控制各种系统。具备语音处理功能的设备通常会配备显示屏来显示图像和视频，以及扬声器来输出音频。

**Summary (发明总览)**:  
本发明描述了一种方法，通过在设备处于环境状态时，根据用户请求的操作和设备的时间数据，动态调整显示内容。具体来说，设备在第一时间段内接收指令输出第一内容，并记录与该内容相关的用户操作。随后，设备根据操作发生的时间以及当前时间数据，确定在第二时间段内输出第二内容，从而实现更智能和个性化的内容显示。

**Key Innovation (核心创新)**:  
1. 在设备处于环境状态时，根据用户操作和时间数据动态调整显示内容。2. 通过分析用户请求的时间点，优化内容显示的时机和内容选择。3. 提供一种更智能的语音控制设备交互方式，提升用户体验。

**Application Inference (应用推测)**:  
该技术可以应用于智能家居设备、智能音箱、车载语音助手等场景。它能够根据用户的日常习惯和操作模式，智能调整设备显示的内容，从而提供更个性化和高效的用户体验。例如，在早晨播放新闻，在晚上推荐音乐，或者根据用户的日程安排提供相关提醒。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474947823)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US12567416)**
<br/><br/>

---


<br/>

### 14. 具有目的地选择功能的虚拟现实消息系统

**Title (EN)**: Artificial reality messaging with destination selection  
**Pub. No.**: US12568057

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Oscar Murillo](https://patents.google.com/?inventor=Oscar+Murillo&country=US&num=100&sort=new), [Fang-Yu Yang](https://patents.google.com/?inventor=Fang-Yu+Yang&country=US&num=100&sort=new), [Annika Rodrigues](https://patents.google.com/?inventor=Annika+Rodrigues&country=US&num=100&sort=new)  
**Publication Date**: 03.03.2026

**Abstract**:  
本公开内容涉及一种扩展现实（XR）消息系统，该系统可以在多个用户之间进行消息线程交流，其中单个消息可以被指定发送到特定的虚拟现实位置或设备。当发送消息时，用户可以选择将消息发送到消息线程中一个或多个其他用户关联的特定目的地。当选择了这样的目的地后，消息可以通过应用基于消息中定义的数据类型和目的地类型配置的模板进行格式化，以便在选定目的地查看。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US12568057_1.png)

**Technical Field (技术领域)**:  
本技术领域涉及在虚拟现实（XR）环境中进行多用户消息交流，并允许用户将消息发送到特定的虚拟或现实位置或设备。

**Background (发明背景)**:  
在虚拟现实（XR）环境中，用户可以看到并与之交互的对象包括虚拟对象，这些对象是由计算机系统生成的物体表示。头戴式显示器（如智能眼镜、VR/AR头显）、移动设备（如智能手机、平板电脑）、投影系统、“洞穴”系统或其他计算系统可以向用户呈现虚拟现实环境，用户可以通过身体动作和/或控制器与其中的虚拟对象进行交互。例如，用户可以选择、移动、缩放/调整大小、倾斜、旋转、更改颜色/纹理/外观或对虚拟对象应用任何其他可想象的操作。用户还可以与现实世界中的真实物体进行交互，这些物体独立于控制虚拟现实环境的计算机系统而存在。例如，用户可以选择一个真实物体并添加虚拟覆盖层以改变物体在环境中的外观（如颜色、纹理），或者选择一个真实物体并在物体旁边显示一个虚拟用户界面以便与之交互，或者使真实物体与虚拟对象产生互动。

**Summary (发明总览)**:  
本发明主要描述了一种在多用户之间进行消息交流的系统，其中每条消息都可以被指定发送到特定的虚拟现实位置或设备。用户发送消息时，可以选择将消息发送到消息线程中一个或多个其他用户关联的特定目的地。一旦选择了目的地，系统会根据消息中定义的数据类型和目的地类型应用相应的模板来格式化消息，从而确保消息在选定位置正确显示。该系统支持用户与虚拟和真实物体进行交互，并允许消息在不同的虚拟或现实环境中传递。

**Key Innovation (核心创新)**:  
1. 允许用户将消息发送到特定的虚拟或现实目的地。2. 通过模板系统根据消息内容和目的地类型动态格式化消息。3. 实现了虚拟和现实物体之间的无缝交互和信息传递。

**Application Inference (应用推测)**:  
该技术可以应用于虚拟会议、远程协作、游戏中的实时交流，以及增强现实购物等场景，提升用户在不同虚拟或现实环境中的互动体验。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474948531)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US12568057)**
<br/><br/>

---


<br/>

### 15. 用于控制灯光的电子设备

**Title (EN)**: Electronic devices for controlling lights  
**Pub. No.**: US12568570

**Applicant**: Amazon Technologies, Inc.  
**Inventor**: [James Siminoff](https://patents.google.com/?inventor=James+Siminoff&country=US&num=100&sort=new), [Michael V. Recker](https://patents.google.com/?inventor=Michael+V.+Recker&country=US&num=100&sort=new), [Ryan David Hruska](https://patents.google.com/?inventor=Ryan+David+Hruska&country=US&num=100&sort=new)  
**Publication Date**: 03.03.2026

**Abstract**:  
本公开描述了一种能够协调控制发光体的网络设备。例如，网络设备可以接收指示激活发光体条件的数据。网络设备还可以接收由各种传感器生成的数据，如运动传感器、光传感器或定时器。利用传感器数据，网络设备可以确定条件是否满足，并在满足条件时，触发发光体激活。为了激活第一组发光体，网络设备可以向电子设备发送信号，使其激活第一组发光体。第一组发光体由电子设备供电。此外，为了激活第二组发光体，网络设备可以向电子设备发送信号。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US12568570_1.png)

**Technical Field (技术领域)**:  
本技术涉及照明系统，特别是无线环境中照明系统功能的改进。

**Background (发明背景)**:  
许多房主和租户都关心家庭安全。为了保护或监控他们的房屋，他们通常希望在家中安装照明系统，如泛光灯、聚光灯等。这些人还可能希望将照明系统整合到安全系统中，以防止或阻止在财产上的可疑和犯罪活动。例如，除了一个或多个A/V录制和通信设备（如安全摄像头）外，一个或多个照明设备的存在对潜在的窃贼起到了强大的威慑作用。

**Summary (发明总览)**:  
本发明旨在解决用户难以根据个人偏好控制不同类型灯光的问题。例如，用户可能在家中不同区域安装多种灯光，如手动控制的人行道灯和用于安全目的的运动感应灯。然而，用户可能需要分别手动控制每种灯光，甚至对于同类型的灯光（如运动感应灯），由于感应时间不同，难以协调灯光的激活。本发明通过提供能够根据用户设定的条件协调控制不同类型灯光的电子设备来解决这些问题。例如，电子设备可以接收用户设备的数据，指示激活灯光的条件，并使用传感器数据判断条件是否满足，从而激活相应的灯光。此外，本发明还可以利用网络设备来控制多个电子设备，每个电子设备可以激活一个或多个灯光，从而实现更高效的灯光控制。

**Key Innovation (核心创新)**:  
1. 通过电子设备协调控制不同类型的灯光，根据用户设定的条件自动激活。2. 利用传感器数据判断条件是否满足，实现智能灯光管理。3. 通过网络设备集中控制多个电子设备，实现更高效的灯光控制。

**Application Inference (应用推测)**:  
本发明可广泛应用于家庭安全系统、智能家居环境以及商业场所的照明管理。它能够根据环境变化（如时间、光线和运动）自动调整灯光，提升能源效率和安全性。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474949094)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US12568570)**
<br/><br/>

---


<br/>

### 16. 基于接触式传感器的音频增强

**Title (EN)**: Contact transducer based audio enhancement  
**Pub. No.**: US12567428

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Lin Li](https://patents.google.com/?inventor=Lin+Li&country=US&num=100&sort=new), [Tetsuro Oishi](https://patents.google.com/?inventor=Tetsuro+Oishi&country=US&num=100&sort=new), [Gongqiang Yu](https://patents.google.com/?inventor=Gongqiang+Yu&country=US&num=100&sort=new)  
**Publication Date**: 03.03.2026

**Abstract**:  
描述了基于接触式传感器的音频增强（例如，增强来自局部区域的声音或用户语音等）。音频系统包括麦克风阵列、接触式传感器和控制器。接触式传感器与用户的组织接触，并可检测由用户语音产生的组织振动。声音和检测到的振动经过预处理。使用预处理后的声音和振动确定输入参数。音频系统分析输入参数以确定一个或多个信号特征。基于信号特征的状态，音频系统调整一个或多个声音滤波器以增强对应于用户语音的信号。音频系统执行与增强信号相关的操作。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US12567428_1.png)

**Technical Field (技术领域)**:  
本发明涉及音频系统领域，具体是通过接触式传感器来增强音频效果的技术。

**Background (发明背景)**:  
在嘈杂环境中（例如大风噪声或嘈杂的餐厅），传统音频系统很难选择性地捕捉目标声源（例如用户自己的声音）。虽然声音的捕捉受到用户是否在说话的影响，但在嘈杂环境中，音频系统通常无法区分用户语音和背景噪声。传统系统尝试使用依赖用户语音的时域和频域特性的语音活动检测器来缓解这一问题，但这些检测器通过常规麦克风检测语音，并试图在干扰声中识别出用户的声音。然而，在低信噪比（SNR）的环境中（即嘈杂环境），这种方法通常会失败，因为用户的声音被噪声掩盖了。

**Summary (发明总览)**:  
本发明描述了一种基于接触式传感器的音频增强方法。音频系统包括麦克风阵列、接触式传感器和控制器。麦克风阵列用于检测局部区域的声音，这些声音可能包括用户的语音或环境声音（如风声、音乐、交通声等）。接触式传感器与用户头部的一部分（如皮肤或耳朵）接触，并检测由用户语音产生的组织（或骨骼）振动。控制器用于识别检测到的声音中的用户语音，并检测风声或判断用户语音是否存在，从而增强用户的声音或执行相关操作。控制器还通过结合检测到的声音中超过阈值的部分来增强与用户语音对应的组织振动，从而生成增强的语音，并执行与增强语音相关的操作。

**Key Innovation (核心创新)**:  
1. 结合接触式传感器和麦克风阵列，精准捕捉用户语音并减少环境噪声干扰。2. 通过分析信号特征动态调整声音滤波器，实现更清晰的语音增强。3. 在低信噪比环境下，利用接触式传感器提高语音检测的准确性。

**Application Inference (应用推测)**:  
该技术可广泛应用于需要清晰语音捕捉和增强的场景，例如嘈杂环境中的通话、语音助手、虚拟现实/增强现实设备，以及听力辅助设备等。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474947836)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US12567428)**
<br/><br/>

---


<br/>

### 17. 在扩展现实中提供可解释人工智能的系统和方法

**Title (EN)**: System and method for providing explainable artificial intelligence within extended reality  
**Pub. No.**: US12567179

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Xuhai Xu](https://patents.google.com/?inventor=Xuhai+Xu&country=US&num=100&sort=new), [Mengjie Yu](https://patents.google.com/?inventor=Mengjie+Yu&country=US&num=100&sort=new), [Tanya Renee Jonker](https://patents.google.com/?inventor=Tanya+Renee+Jonker&country=US&num=100&sort=new)  
**Publication Date**: 03.03.2026

**Abstract**:  
本文描述的特征通常与在扩展现实中提供可解释人工智能（XAI）有关。具体来说，在获取包括环境信息、用户状态信息和用户档案信息的输入数据后，扩展现实系统通过头戴式设备确定向用户呈现的虚拟内容。扩展现实系统还会识别与这些虚拟内容相关的额外上下文因素，包括系统目标、用户目标、用户的当前状态、用户位置、当前时间和用户的当前环境。然后，这些额外的上下文细节被用来确定描述虚拟内容的一个或多个方面的XAI内容（例如，如何基于某些因素确定虚拟内容）。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US12567179_1.png)

**Technical Field (技术领域)**:  
本发明涉及扩展现实环境，特别是提供可解释人工智能的技术，即解释人工智能生成的内容为何以及如何提供给用户。

**Background (发明背景)**:  
扩展现实（XR）是一种经过调整后呈现给用户的现实形式，包括虚拟现实（VR）、增强现实（AR）、混合现实（MR）、混合虚拟现实或它们的组合和衍生形式。扩展现实内容可以是完全生成的虚拟内容，也可以是生成的虚拟内容与物理内容（例如，物理或现实世界中的物体）的结合。扩展现实内容可以包括数字图像或动画、文本、视频、音频、触觉反馈或它们的组合，并且这些内容可以通过单一渠道或多个渠道呈现（例如，产生三维效果的立体视频）。扩展现实可以与应用、产品、配件、服务或它们的组合相关联，这些应用、产品、配件和服务用于创建扩展现实中的内容或用于在扩展现实中执行活动。提供此类内容的扩展现实系统可以在各种平台上实现，包括连接到主机计算机系统的头戴式显示器（HMD）、独立HMD、移动设备或计算系统，或任何其他能够向一个或多个观众提供扩展现实内容的硬件平台。

**Summary (发明总览)**:  
本发明描述了一种在扩展现实中提供可解释人工智能的系统和方法。在一些实现中，扩展现实系统包括一个头戴式设备，该设备具有用于向用户显示内容的显示屏和一个或多个用于捕获用户视野图像的传感器；一个或多个处理器；以及一个或多个存储器，这些存储器可被处理器访问并存储可由处理器执行的指令。当这些指令被执行时，处理器会执行以下处理：获取用户头戴式设备的输入数据；基于输入数据确定通过头戴式设备向用户呈现的虚拟内容；识别与虚拟内容相关的上下文因素；基于虚拟内容和上下文因素确定描述虚拟内容一个或多个方面的可解释人工智能（XAI）内容；并利用头戴式设备在向用户显示的扩展现实环境中呈现虚拟内容和可解释人工智能内容。在一些实现中，输入数据包括描述用户当前环境的环境信息、描述用户当前状态的用户状态信息以及描述用户一个或多个偏好的用户档案信息。在其他实现中，通过将输入数据作为输入提供给一个或多个训练有素的机器学习/人工智能环境，并从这些环境中检索虚拟内容来确定要呈现给用户的虚拟内容。在其他实现中，与虚拟内容相关的上下文因素包括一个或多个系统目标、一个或多个用户目标和用户档案的一个或多个组成部分。本发明的某些实现包括一个系统，该系统包括一个或多个数据处理器和一个包含指令的非易失性计算机可读存储介质，当这些指令在一个或多个数据处理器上执行时，会导致一个或多个数据处理器执行部分或全部的一个或多个方法及/或部分或全部的一个或多个过程。本发明的某些实现还包括一个或多个非易失性计算机可读介质，存储着计算机可读指令，当这些指令由一个或多个处理系统执行时，会导致一个或多个处理系统执行部分或全部的一个或多个方法及/或部分或全部的一个或多个过程。上述和以下描述的技术可以在多种方式和多种环境中实现。下面将更详细地描述几个示例实现和环境，但这些实现和环境只是众多可能性中的几个。

**Key Innovation (核心创新)**:  
1. 在扩展现实中集成了可解释人工智能（XAI），使用户能够理解虚拟内容背后的决策逻辑。2. 通过分析环境信息、用户状态和用户档案信息，动态生成个性化的虚拟内容和解释内容。3. 提供了一种系统化的方法，将系统目标、用户目标和用户档案整合到XAI内容的生成中。

**Application Inference (应用推测)**:  
该技术可以应用于增强现实和虚拟现实设备中，例如智能眼镜、头戴式显示器等，帮助用户更好地理解系统推荐的虚拟内容。此外，它还可以用于智能家居、健身指导、导航系统等领域，通过提供个性化的解释内容来提升用户体验和信任度。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474947561)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US12567179)**
<br/><br/>

---


<br/>

### 18. 基于接近检测的机器人设备控制

**Title (EN)**: Controlling robotic devices based on proximity detection  
**Pub. No.**: US12564959

**Applicant**: Amazon Technologies, Inc.  
**Inventor**: [Seth R Kaufman](https://patents.google.com/?inventor=Seth+R+Kaufman&country=US&num=100&sort=new), [Wesley Roy Connell](https://patents.google.com/?inventor=Wesley+Roy+Connell&country=US&num=100&sort=new), [Siva Aduri](https://patents.google.com/?inventor=Siva+Aduri&country=US&num=100&sort=new)  
**Publication Date**: 03.03.2026

**Abstract**:  
本发明公开了用于控制库存系统机器人工作单元内物理移动设备运动的技术。用户设备（例如可穿戴设备）可以在工作空间内发送无线信号。这些信号中的一个可以被与机器人工作单元相关联的一个或多个接收设备接收。当信号被接收时，接近监控引擎可以向机器控制器发送通知数据。发送通知数据可能导致机器控制器执行指令以停止机器人设备（和/或与机器人工作单元相关的其他移动设备）的运动。当信号持续被接收时，机器人工作单元的设备可能保持停止状态。当信号不再被接收时，设备可以恢复运动。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US12564959_1.png)

**Technical Field (技术领域)**:  
本发明涉及机器人技术和库存管理系统领域，具体关注在机器人工作单元内通过接近检测来控制设备运动的技术。

**Background (发明背景)**:  
现代库存系统，如邮购仓库、供应链配送中心、机场行李系统和定制制造设施，通常使用移动机器人设备在工作空间内移动物品和/或存储容器。这些系统中的不同组件之间的任务协调可能很繁琐。随着库存系统的扩展，同时完成大量包装、存储和其他库存相关任务的挑战变得复杂。在需要响应大量不同任务请求的系统中，系统资源（包括空间和设备）的低效利用可能导致吞吐量降低、响应时间过长、未完成任务积压增加以及整体系统性能不佳。因此，这些系统中的不同组件之间的协调对于提高效率和吞吐量是必要的。

**Summary (发明总览)**:  
本发明提出了一种通过接近检测来控制机器人设备的方法。在库存系统的工作空间内，用户设备（例如可穿戴设备）发送无线信号，机器人工作单元的接收设备接收这些信号。当信号被接收时，接近监控引擎会通知机器控制器，机器控制器随后执行指令以停止机器人设备及其相关移动设备的运动。设备将保持停止状态，直到信号不再被接收。这种方法旨在提高系统效率和响应速度，减少资源浪费和任务积压。

**Key Innovation (核心创新)**:  
1. 通过用户设备发送无线信号实现接近检测。2. 利用接近监控引擎实时通知机器控制器以控制设备运动。3. 在信号持续接收期间保持设备停止状态，确保工作空间的安全和协调。

**Application Inference (应用推测)**:  
该技术可以广泛应用于需要高效协调和管理的库存系统，如大型仓库、配送中心和制造设施。它有助于减少人为错误、提高设备利用率，并优化整体工作流程。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474945114)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US12564959)**
<br/><br/>

---


<br/>

### 19. 基于手势输入的内容选择与操作确定

**Title (EN)**: Content Selection and Action Determination Based on a Gesture Input  
**Pub. No.**: US20260056653

**Applicant**: Google LLC  
**Inventor**: [Sarah Fay Smith](https://patents.google.com/?inventor=Sarah+Fay+Smith&country=US&num=100&sort=new), [Clement Dickinson Wright](https://patents.google.com/?inventor=Clement+Dickinson+Wright&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
内容处理系统和方法包括获取手势输入和显示数据，确定手势输入选择的内容，对手势进行分类，并根据内容选择和手势分类执行特定的数据处理操作。特定的数据处理操作可以基于手势分类而有所不同。内容选择确定包括确定手势掩码，然后确定显示内容项中位于手势掩码内的特征。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260056653_1.png)

**Technical Field (技术领域)**:  
本发明涉及基于手势输入的显示数据处理技术，特别是通过手势输入确定要处理的部分显示数据，并执行相应的数据处理操作。

**Background (发明背景)**:  
理解周围的世界可能很困难。无论是试图了解眼前的对象是什么、确定该对象还可以在哪里找到，还是尝试确定互联网上的图像是在哪里拍摄的，仅靠文本搜索可能会遇到困难。特别是，用户可能难以确定使用哪些关键词。此外，这些关键词可能不够描述性或不足以生成所需的结果。当数据是视觉的或属于小众领域时，获取与不同应用程序和/或媒体文件中显示的信息相关联的额外信息也可能很困难。因此，用户在尝试构建搜索查询以搜索额外信息时可能会遇到困难。在某些情况下，用户可能会截取屏幕截图并将其用作查询图像。然而，搜索可能会导致与用户不感兴趣的项目相关的无关搜索结果。此外，屏幕截图的截取和/或屏幕截图的裁剪可能依赖于提供多个用户输入，但这些输入仍可能无法提供所需的结果。

**Summary (发明总览)**:  
本发明提出了一种基于手势输入的内容处理方法。系统首先通过触摸屏获取手势输入和显示数据，然后根据手势输入和显示数据生成手势掩码，并确定用户选择的内容部分。接着，系统使用手势识别模型对手势输入进行分类，以识别特定的手势类型。最后，系统根据手势分类对选择的内容部分执行相应的数据处理操作，例如搜索、保存或分享。系统还支持通过手势输入调用覆盖界面，以选择不同的数据处理操作。

**Key Innovation (核心创新)**:  
本发明的核心创新在于通过手势输入直接选择屏幕内容，并基于手势类型自动执行相应的操作，如搜索、保存或分享。这种方法简化了用户与数字内容的交互方式，提高了操作效率和准确性。

**Application Inference (应用推测)**:  
该技术可以应用于智能设备的内容交互，例如在移动设备上通过手势快速搜索、保存或分享屏幕上的信息。它还可以用于增强现实、虚拟现实或任何需要直观手势操作的界面中。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474913098)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260056653)**
<br/><br/>

---


<br/>

### 20. 基于光电容积描记法的生理参数测定技术——利用现有头戴设备硬件

**Title (EN)**: PHOTOPLETHYSMOGRAPHY BASED PHYSIOLOGICAL PARAMETER DETERMINATION TECHNIQUES USING EXISTING HEAD MOUNTED DEVICE HARDWARE  
**Pub. No.**: US20260053382

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Mantas Zurauskas](https://patents.google.com/?inventor=Mantas+Zurauskas&country=US&num=100&sort=new), [Christopher Bernard](https://patents.google.com/?inventor=Christopher+Bernard&country=US&num=100&sort=new), [Robert Dale Cavin](https://patents.google.com/?inventor=Robert+Dale+Cavin&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
提供了用于确定用户心率的方法、设备和系统。一种这样的方法包括：通过与计算设备通信连接的传感器，在一段时间内检测从用户面部感兴趣区域反射的光；由计算设备基于检测到的光确定该时间段内的光强度值序列；并由计算设备使用光强度值确定用户的心率。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260053382_1.png)

**Technical Field (技术领域)**:  
本发明涉及利用头戴设备硬件进行生理参数测定的技术领域，具体是通过光电容积描记法（PPG）来监测用户的生理指标，如心率和血压。

**Background (发明背景)**:  
随着虚拟现实（VR）和增强现实（AR）设备的普及，用户对健康监测功能的需求也在增加。传统的心率监测设备通常需要额外的硬件，而本发明旨在利用现有的头戴设备硬件，通过检测面部反射的光来测定用户的生理参数，从而实现更便捷的健康监测。

**Summary (发明总览)**:  
本发明提出了一种通过现有头戴设备硬件测定用户生理参数的方法。该方法通过传感器检测用户面部反射的光，并利用计算设备分析光强度值的变化，从而计算出心率等生理参数。相关技术还包括对光强度数据的过滤和频率分析，以进一步提高测量的准确性。

**Key Innovation (核心创新)**:  
1. 利用现有头戴设备硬件，无需额外传感器即可测定生理参数。2. 通过光强度值的变化分析实现心率等生理指标的监测。3. 结合过滤和频率分析技术，提高测量的准确性和可靠性。

**Application Inference (应用推测)**:  
该技术可广泛应用于VR、AR头戴设备中，为用户提供实时健康监测功能，例如在运动、游戏或日常使用中监测心率和血压。此外，它还可以用于医疗领域，帮助医生远程监测患者的生理状态。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474912509)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260053382)**
<br/><br/>

---


<br/>

### 21. 大视场曲率光导

**Title (EN)**: LARGER FIELD OF VIEW CURVED LIGHTGUIDE  
**Pub. No.**: US20260056411

**Applicant**: GOOGLE LLC  
**Inventor**: [Ozan Cakmakci](https://patents.google.com/?inventor=Ozan+Cakmakci&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
一种曲率光导，采用自由曲面耦合器、自由曲面外表面和自由曲面出射耦合器，布置在球形外表面镜头和球形面向眼睛的镜头表面之间，以实现相对较大的视场角，用于显示光和环境光的传输，同时保持轻薄的外形。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260056411_1.png)

**Technical Field (技术领域)**:  
本发明涉及可穿戴电子眼镜设备的光学系统，特别是用于增强现实或混合现实的头戴式显示器（HMD），其通过光学元件将图像投射到用户的视野中，并允许用户同时看到外部环境。

**Background (发明背景)**:  
可穿戴电子眼镜设备通常包含光学系统，用于放大显示图像并将其投射到用户的视野中。在某些情况下，这些设备还允许用户通过镜头或透镜看到外部世界。一些设备使用近眼光学系统向用户显示内容，这类设备有时被称为头戴式显示器（HMD）。例如，传统的HMD设计将一个微显示器放置在头戴式框架的太阳穴或边缘区域，并通过光学元件（如曲率光导）将生成的图像传递到用户的视野中。这些设备可以用于实现增强现实（AR）或混合现实（MR）。

**Summary (发明总览)**:  
本发明提出了一种近眼显示系统，包括一个具有球形外表面和球形面向眼睛的表面的镜头，以及一个位于两者之间的光导。光导包含自由曲面耦合器、自由曲面外表面和自由曲面出射耦合器。自由曲面外表面通过光学透明胶与球形外表面粘合，并设计成能够使入射角至少约为45度的光线发生全内反射。光学透明胶的折射率约为1.2。光导的微显示器生成的光线通过自由曲面耦合器进入光导，并在自由曲面外表面的作用下发生全内反射，最终通过自由曲面出射耦合器从球形面向眼睛的表面出射到用户的眼睛。同时，球形外表面和球形面向眼睛的表面允许环境光通过光导传递到用户的眼睛。

**Key Innovation (核心创新)**:  
1. 采用自由曲面设计的光导实现了大视场角，同时保持了设备的轻薄外形。2. 通过光学透明胶与球形外表面的结合，实现了高效的全内反射。3. 同时支持显示光和环境光的传输，提供增强现实体验。

**Application Inference (应用推测)**:  
该技术可应用于增强现实（AR）、混合现实（MR）以及虚拟现实（VR）头戴式显示器中，为用户提供更宽广的视野和更清晰的图像显示，同时允许用户自然地看到周围环境。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474912832)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260056411)**
<br/><br/>

---


<br/>

### 22. 使用分布式设备进行主动说话人检测

**Title (EN)**: ACTIVE SPEAKER DETECTION USING DISTRIBUTED DEVICES  
**Pub. No.**: US20260057892

**Applicant**: Microsoft Technology Licensing, LLC  
**Inventor**: [Ross Garrett Cutler](https://patents.google.com/?inventor=Ross+Garrett+Cutler&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
本文档涉及使用分布式设备进行主动说话人检测。例如，所公开的实施例可以利用一个或多个用户的个人设备来检测这些用户在与其他用户通话期间何时在说话。然后，可以使用个人设备上的摄像头获取用户的正面视图，并将其提供给其他通话参与者。在某些情况下，会使用用户设备上的麦克风或摄像头来检测用户何时在主动说话。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260057892_1.png)

**Technical Field (技术领域)**:  
本发明涉及远程会议技术领域，具体是通过分布式设备实现多人通话时主动说话人的检测与视频展示。

**Background (发明背景)**:  
远程会议是计算设备的重要应用场景之一，参与者通过网络进行音频和/或视频交流。在某些情况下，多个用户会聚集在同一个地方，例如会议室，会议室中的视频摄像头会向参与通话的远程设备提供视频信号。然而，会议室的视频摄像头存在一些限制，制约了它们能提供的用户体验类型。

**Summary (发明总览)**:  
本发明主要描述了一种分布式远程会议技术。设备可以通过自身的摄像头和麦克风捕捉视频和音频信号，检测出当前正在主动说话的用户，并发送一个主动说话指示信号给其他设备。同时，设备会将捕捉到的视频信号发送给其他设备，这些设备会将接收到的视频信号整合到通话的回放信号中，供通话中的所有设备播放。

**Key Innovation (核心创新)**:  
1. 利用个人设备的摄像头和麦克风，精准检测主动说话人。2. 通过分布式设备网络，实现多人通话中说话人视频的实时切换与整合。3. 提升了远程会议中视频展示的灵活性和用户体验。

**Application Inference (应用推测)**:  
该技术可以广泛应用于远程会议、在线协作平台以及多人视频通话等场景，尤其适用于需要突出显示当前说话人的场合，例如企业会议、在线教育以及多人游戏互动等。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474914472)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260057892)**
<br/><br/>

---


<br/>

### 23. 具有节能配置的显示驱动集成电路

**Title (EN)**: Display Driver Integrated Circuit with a Power-Conserving Configuration  
**Pub. No.**: US20260057847

**Applicant**: Google LLC  
**Inventor**: [Weihsiang Hung](https://patents.google.com/?inventor=Weihsiang+Hung&country=US&num=100&sort=new), [Sangmoo Choi](https://patents.google.com/?inventor=Sangmoo+Choi&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
本文描述了实现具有节能配置的显示驱动集成电路的技术和方法。在一个示例方面，设备的显示模块包括一个显示驱动集成电路，它可以控制显示模块中显示面板内多个通道的操作。显示驱动集成电路可以根据显示面板的刷新率随时间变化而采用不同的配置。这些配置中至少有一种是节能配置，它通过禁用一部分放大器来节省电力。显示驱动集成电路包括驱动切换电路，它可以在节能配置期间将显示面板中两个或多个不同通道的显示数据路由到一个启用的放大器。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260057847_1.png)

**Technical Field (技术领域)**:  
本发明涉及电子设备中的显示技术，特别是用于优化显示驱动集成电路能耗的技术。

**Background (发明背景)**:  
电子设备通常提供多种功能，使用户日常生活更加便捷。然而，某些功能会消耗大量电力，导致设备续航时间缩短或需要更频繁地充电。由于电力限制会显著影响电子设备的使用，因此对设计低功耗组件以减少电子设备整体能耗的需求日益增加。

**Summary (发明总览)**:  
本发明描述了实现具有节能配置的显示驱动集成电路的技术和方法。显示模块中的显示驱动集成电路可以控制显示面板内多个通道的操作，并根据显示面板的刷新率变化采用不同的配置。其中一种配置是节能配置，它通过禁用部分放大器来节省电力。显示驱动集成电路包含驱动切换电路，可以在节能配置期间将显示面板中不同通道的显示数据路由到一个启用的放大器，从而在支持某些刷新率的同时，通过使用较少的放大器来节省电力。

**Key Innovation (核心创新)**:  
1. 通过禁用部分放大器实现节能；2. 驱动切换电路能够将多个通道的数据路由到一个放大器；3. 在不同刷新率下动态调整配置以优化能耗。

**Application Inference (应用推测)**:  
该技术可应用于智能手机、平板电脑、笔记本电脑等便携式电子设备，以延长电池续航时间。此外，它也适用于需要长时间运行且对能耗敏感的大屏幕显示器，如智能电视和数字广告牌。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474914422)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260057847)**
<br/><br/>

---


<br/>

### 24. 电子设备热管理系统的系统和方法

**Title (EN)**: SYSTEMS AND METHODS FOR THERMAL MANAGEMENT OF ELECTRONIC DEVICES  
**Pub. No.**: US20260059709

**Applicant**: Microsoft Technology Licensing, LLC  
**Inventor**: [Nicholas Andrew KEEHN](https://patents.google.com/?inventor=Nicholas+Andrew+KEEHN&country=US&num=100&sort=new), [Husam Atallah ALISSA](https://patents.google.com/?inventor=Husam+Atallah+ALISSA&country=US&num=100&sort=new), [Bharath RAMAKRISHNAN](https://patents.google.com/?inventor=Bharath+RAMAKRISHNAN&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
一种热管理设备包括主体、流体运动结构和运动机构。主体配置为在近表面接收来自发热组件的热量，而流体运动结构位于远离近表面的主体远表面，其中流体运动结构配置为引导工作流体的流动，并且主体配置为将热量传递给工作流体。运动机构配置为相对于主体移动流体运动结构。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260059709_1.png)

**Technical Field (技术领域)**:  
本发明涉及电子设备的热管理技术领域，特别是通过使用流体运动结构来增强散热效果的热管理系统。

**Background (发明背景)**:  
电子设备在运行过程中会产生大量热量，这些热量可能会损坏内部组件。通常需要冷却系统来确保在处理或使用负载较重时，组件温度保持在安全范围内。不同的计算需求和应用会产生不同量的热能，因此需要不同级别的热管理。

**Summary (发明总览)**:  
本发明提出了一种热管理设备，包括主体、流体运动结构和运动机构。主体负责接收来自发热组件的热量，流体运动结构位于主体的远表面，用于引导工作流体的流动，而主体将热量传递给工作流体。运动机构则负责驱动流体运动结构相对于主体移动。此外，本发明还描述了一种热管理方法，包括将热量从发热组件传递到工作流体，通过移动流体运动结构来引导流体流动，并最终将流体运动结构恢复到原始位置。

**Key Innovation (核心创新)**:  
1. 通过流体运动结构引导工作流体流动，提升散热效率。2. 运动机构使流体运动结构能够相对于主体移动，从而优化散热效果。3. 提供了一种动态调整流体流动方向的方法，以适应不同的散热需求。

**Application Inference (应用推测)**:  
本发明可应用于各种电子设备的热管理，例如计算机服务器、智能手机、电动汽车等，尤其适用于需要高效散热和高性能计算的场景。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474916487)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260059709)**
<br/><br/>

---


<br/>

### 25. 可拆卸式传感器模块

**Title (EN)**: REMOVABLY ATTACHABLE SENSOR MODULE  
**Pub. No.**: US20260059223

**Applicant**: Microsoft Technology Licensing, LLC  
**Inventor**: [James Hao-An Chen LIN](https://patents.google.com/?inventor=James+Hao-An+Chen+LIN&country=US&num=100&sort=new), [Michael Cameron GORDON](https://patents.google.com/?inventor=Michael+Cameron+GORDON&country=US&num=100&sort=new), [Denys V. YAREMENKO](https://patents.google.com/?inventor=Denys+V.+YAREMENKO&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
本发明涉及可拆卸式传感器模块，该模块可与可穿戴音频设备连接。示例中，一种可拆卸传感器模块包括一个光传感器、一个固定磁铁和一个可移动的百叶窗。可移动的百叶窗包含一个双稳态磁铁，该磁铁会排斥固定磁铁，从而推动百叶窗进入隐私位置（阻挡光传感器的视野）或开放位置（不阻挡光传感器的视野）。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260059223_1.png)

**Technical Field (技术领域)**:  
本发明涉及可穿戴设备领域，特别是可与音频设备集成的可拆卸传感器模块，用于环境感知和隐私保护。

**Background (发明背景)**:  
可穿戴设备中的传感器可以处理并向用户传达周围环境的信息。然而，如何在需要时保护用户隐私是一个重要问题。

**Summary (发明总览)**:  
本发明介绍了一种可拆卸传感器模块的设计，该模块可与可穿戴音频设备连接。模块包含光传感器、固定磁铁和带双稳态磁铁的可移动百叶窗。双稳态磁铁通过排斥固定磁铁，使百叶窗能够在隐私位置（阻挡光传感器视野）和开放位置（不阻挡视野）之间切换。此外，本发明还提供了一种方法，通过利用固定磁铁和双稳态磁铁的磁场来控制百叶窗的位置。本发明旨在提供一种灵活的隐私保护机制，同时保持传感器的功能性。

**Key Innovation (核心创新)**:  
1. 采用双稳态磁铁与固定磁铁的相互作用，实现百叶窗的自动切换。2. 提供了一种简单而有效的隐私保护机制，用户可轻松控制传感器的视野。3. 模块化设计使其可拆卸，便于在不同设备间灵活使用。

**Application Inference (应用推测)**:  
该技术可应用于智能耳机、眼镜等可穿戴音频设备，为用户提供环境感知的同时，确保隐私保护。此外，该设计也可能扩展到其他需要动态隐私控制的可穿戴或便携式设备中。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474915948)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260059223)**
<br/><br/>

---


<br/>

### 26. 用于提供用户生理状态定性描述的可穿戴设备及其使用方法

**Title (EN)**: WEARABLE DEVICES FOR PROVIDING A QUALITATIVE AND ACTIONABLE DESCRIPTOR OF A USER'S PHYSIOLOGICAL STATE, AND METHODS OF USE THEREOF  
**Pub. No.**: US20260053448

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Myriam Amsallem](https://patents.google.com/?inventor=Myriam+Amsallem&country=US&num=100&sort=new), [Brian Keith Cabral](https://patents.google.com/?inventor=Brian+Keith+Cabral&country=US&num=100&sort=new), [Isaac Robert Galatzer-Levy](https://patents.google.com/?inventor=Isaac+Robert+Galatzer-Levy&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
本发明提供了一种在腕戴式设备上呈现用户生理状态定性描述的系统和方法。该方法包括通过一个或多个传感器监测佩戴腕戴式设备的用户的多个生理参数值。将这些生理参数值与基线值进行比较，基线值是根据在预定时间段内测量的多个生理参数值确定的。基于比较结果，从一组三个或更多预定义的定性描述中确定用户生理状态的定性描述。该方法包括通过与腕戴式设备通信的显示设备呈现用户生理状态的定性描述，而不显示代表用户生理状态的数字分数。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260053448_1.png)

**Technical Field (技术领域)**:  
本发明涉及可穿戴设备及其使用方法，特别是用于通过传感器监测用户生理参数并基于与基线值的比较提供用户生理状态的定性描述的腕戴式设备。

**Background (发明背景)**:  
智能手表、手机和平板电脑等计算设备可以实时监测并向用户展示健康信息，如心率和睡眠模式。然而，这些设备提供的信息往往令人困惑或难以承受，用户难以据此决定应采取哪些行动。因此，需要提供易于理解和操作的用户健康信息，以帮助用户做出日常活动和目标的决策。

**Summary (发明总览)**:  
本发明描述的腕戴式设备和方法通过在设备上呈现用户生理状态的定性描述（如高、中、低等非数字描述）来解决上述问题。这些设备和方法使用一个或多个传感器监测用户佩戴腕戴式设备时的多个生理参数（如心率、心率变异性、深睡时长、血氧水平、血压、压力水平、能量水平、活动水平等），以确定用户的当前生理状态。具体来说，这些设备和方法将测量的生理参数值与基线值进行比较，并根据比较结果从一组预定义的定性描述中选择一个定性描述。随后，这些设备通过显示设备向用户呈现确定的定性描述，而无需显示代表用户生理状态的数字分数。定性描述可以提供易于遵循和操作的整体健康信息，并根据确定的定性描述提供适当的活动建议。在某些情况下，定性描述基于至少三种健康生物特征（如静息心率、心率变异性和睡眠数据）的组合，以线性或非线性方式加权整合。这些设备和方法通过提供紧凑、无需手持的计算系统，包括一个可以全天佩戴而不妨碍用户活动的显示屏，从而改善用户的日常活动和效率。例如，这些设备和方法可以提供更新的定性描述，帮助用户在不干扰日常生活的情况下了解其生理变化（如锻炼、步行、冥想、睡眠、工作）。这些定性描述可以全天更新，以帮助用户实现整体健康目标，包括根据用户生理状态的变化调整活动目标。

**Key Innovation (核心创新)**:  
1. 通过传感器监测多个生理参数并与基线值比较，提供用户生理状态的定性描述。2. 不依赖数字分数，而是以易懂的方式呈现健康信息，帮助用户快速做出决策。3. 结合机器学习模型和用户主观反馈，提供个性化的健康建议和活动推荐。

**Application Inference (应用推测)**:  
这种技术可以广泛应用于健康管理领域，如智能手表和健身追踪器，帮助用户更好地了解自身健康状况并做出相应的生活调整。此外，它还可以用于企业健康计划、运动员训练监测以及老年人健康监护等方面。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474913242)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260053448)**
<br/><br/>

---


<br/>

### 27. 改进光学稀疏眼动追踪的系统和方法

**Title (EN)**: SYSTEMS AND METHODS FOR IMPROVED OPTICAL SPARSE EYE-TRACKING  
**Pub. No.**: US20260056403

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Mantas Zurauskas](https://patents.google.com/?inventor=Mantas+Zurauskas&country=US&num=100&sort=new), [Michal Makowski](https://patents.google.com/?inventor=Michal+Makowski&country=US&num=100&sort=new), [Brian Schowengerdt](https://patents.google.com/?inventor=Brian+Schowengerdt&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
在一些实施例中，装置包括一个光敏层，该层具有一系列光探测器；一个光学传输元件，用于接收来自每个光探测器的光学信号；一个转换模块，用于将光学信号转换为电信号；以及一个处理器，用于根据电信号确定注视方向。还公开了各种附加设备、系统和方法。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260056403_1.png)

**Technical Field (技术领域)**:  
本发明涉及眼动追踪技术领域，具体是一种利用光学传感器和信号处理来检测用户眼睛注视方向的技术，可应用于增强现实、虚拟现实等领域。

**Background (发明背景)**:  
传统的眼动追踪技术通常依赖于摄像头和复杂的图像处理算法，存在精度和效率上的限制。随着增强现实和虚拟现实设备的发展，对更高效、更精准的眼动追踪技术的需求日益增加。现有的光学眼动追踪方法虽然有所改进，但在复杂光线环境下仍可能受到干扰。

**Summary (发明总览)**:  
本发明提出了一种改进的光学眼动追踪系统和方法。该系统包括一个光敏层，内含多个光探测器，用于接收来自眼睛的发射光或反射光；光学传输元件，用于将光信号传输到相应的光探测器；一个转换模块，将光信号转换为电信号；以及一个处理器，用于分析电信号以确定眼睛的注视方向。系统还包括一个头戴式显示器，可以根据检测到的注视方向调整显示内容。此外，处理器还可以进一步分析电信号以识别用户的眼部特征。

**Key Innovation (核心创新)**:  
1. 采用光学传感器阵列和光学传输元件，提高了信号采集的精度和效率。2. 通过电信号处理算法，精准检测眼睛注视方向和眼部特征。3. 系统与头戴式显示器集成，实现实时内容调整，提升用户体验。

**Application Inference (应用推测)**:  
该技术可广泛应用于增强现实、虚拟现实设备中，用于提升用户交互的自然性和精准度。此外，它还可以用于医疗诊断中的眼球运动分析、智能眼镜等可穿戴设备中，为用户提供更智能的视觉体验。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474912823)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260056403)**
<br/><br/>

---


<br/>

### 28. ```json
{
  "title_cn": "用于文本修改的空中手势检测技术，以及使用这些技术的系统、可穿戴设备和方法的发明",
  "abstract_cn": "一种示例方法包括在第一模式下显

**Title (EN)**: TECHNIQUES FOR DETECTION OF IN-AIR HAND GESTURES FOR TEXT MODIFICATION, AND SYSTEMS, WEARABLE DEVICES, AND METHODS FOR USING THESE TECHNIQUES  
**Pub. No.**: US20260056620

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Ian Sebastian Murphy Bicking](https://patents.google.com/?inventor=Ian+Sebastian+Murphy+Bicking&country=US&num=100&sort=new), [Austin Ha](https://patents.google.com/?inventor=Austin+Ha&country=US&num=100&sort=new), [Adam Berenzweig](https://patents.google.com/?inventor=Adam+Berenzweig&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
一种示例方法包括在第一模式下显示多个文本词。在显示多个文本词的第一模式期间，检测用户执行的第一个空中手势。响应于第一个空中手势，启用与第一模式不同的文本修改模式，允许用户识别并修改多个文本词中的至少一个。基于至少部分用户的第一动作识别目标词，并在文本修改模式启用时，基于至少部分用户的第二动作修改目标词。该方法进一步包括，在第一模式下，无法识别或修改任何显示的文本词。",

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260056620_1.png)

**Technical Field (技术领域)**:  


**Background (发明背景)**:  


**Summary (发明总览)**:  


**Key Innovation (核心创新)**:  


**Application Inference (应用推测)**:  


**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474913061)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260056620)**
<br/><br/>

---


<br/>

### 29. 优化智能辅助的时机

**Title (EN)**: OPTIMIZING THE TIMING OF INTELLIGENT FACILITATION  
**Pub. No.**: US20260057621

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Aakar Gupta](https://patents.google.com/?inventor=Aakar+Gupta&country=US&num=100&sort=new), [Difeng Yu](https://patents.google.com/?inventor=Difeng+Yu&country=US&num=100&sort=new), [Ruta Parimal Desai](https://patents.google.com/?inventor=Ruta+Parimal+Desai&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
本发明公开了一种计算机实现的方法，包括用于优化在虚拟现实/增强现实（VR/AR）环境中提供智能选择建议的时机的系统和方法。在一个示例中，所述系统和方法确定用户界面中潜在操作是预期操作的概率；在时间段内量化在用户界面中建议潜在操作的价值；基于该时间段内量化的价值选择建议潜在操作的时机；并在选定的时机在用户界面中建议潜在操作。还公开了其他各种方法、系统以及计算机可读介质。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260057621_1.png)

**Technical Field (技术领域)**:  
本发明涉及虚拟现实（VR）和增强现实（AR）技术领域，具体关注在VR/AR环境中智能辅助提示的最佳时机优化。

**Background (发明背景)**:  
在VR/AR环境中，用户经常需要通过智能辅助来完成任务。然而，智能提示的时机对用户体验至关重要。如果提示过早，用户可能还未准备好；如果提示过晚，用户可能已经自行尝试操作。因此，如何选择最佳时机提供智能辅助成为关键问题。

**Summary (发明总览)**:  
本发明提出了一种优化智能辅助提示时机的系统和方法。通过分析用户界面中潜在操作的概率和价值，系统能够在合适的时间点提供智能建议，从而提升用户操作的效率和体验。具体方法包括：计算用户操作意图的概率，评估智能建议的价值，选择最佳时机进行提示，并最终在选定的时机提供建议。

**Key Innovation (核心创新)**:  
1. 通过概率计算和价值评估确定智能提示的最佳时机。2. 动态调整提示时机以适应用户行为和任务需求。3. 结合用户意图和任务类型优化提示效果。

**Application Inference (应用推测)**:  
该技术可广泛应用于VR/AR游戏、培训、设计软件以及需要智能辅助的各类应用中，帮助用户更高效地完成任务，同时提升整体用户体验。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474914171)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260057621)**
<br/><br/>

---


<br/>

### 30. 结合人体和目标区域以识别与物体相关的人类动作

**Title (EN)**: COMBINING BODY AND TARGET REGIONS FOR IDENTIFICATION OF A HUMAN ACTION WITH RESPECT TO AN OBJECT  
**Pub. No.**: US20260057705

**Applicant**: MICROSOFT TECHNOLOGY LICENSING, LLC  
**Inventor**: [Pei YU](https://patents.google.com/?inventor=Pei+YU&country=US&num=100&sort=new), [Ying JIN](https://patents.google.com/?inventor=Ying+JIN&country=US&num=100&sort=new), [Zicheng LIU](https://patents.google.com/?inventor=Zicheng+LIU&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
一种系统使用单一视觉模型结合人体低分辨率图像和目标身体部位高分辨率图像，以更高效地识别与物体相关的人类动作。系统接收包含人体的场景图像，例如由相机捕获的视频连续帧。系统通过从图像中提取包含人体的区域来生成人体图像，并通过提取包含与物体交互的目标身体部位的图像区域来生成目标图像。系统被配置为对这两个图像执行类似操作，以确保单一视觉模型能够以比人体图像更精细的级别处理目标图像。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260057705_1.png)

**Technical Field (技术领域)**:  
本发明涉及计算机视觉领域，特别是关于通过结合不同分辨率的图像来识别与物体相关的人类动作的技术。

**Background (发明背景)**:  
在计算机视觉系统中，识别场景中的人类动作是一项具有挑战性的任务。特别是，人类正在交互的物体（例如，手持物体）提供了有助于识别人类动作的上下文信号。然而，人类交互的物体通常很小（例如，能放在手中），因此计算机视觉系统需要高分辨率图像才能可靠地识别这些小物体。高分辨率图像显著增加了计算机视觉系统处理图像所需的时间，例如，识别人类正在交互的小物体。这种时间增加引入了延迟，这对许多使用此类计算机视觉系统的应用来说是不切实际的。例如，在增强现实、机器人、工业安全和安保等领域中运行的应用需要近乎实时地完成物体识别，因此难以依赖处理高分辨率图像的计算机视觉系统。

**Summary (发明总览)**:  
本发明提出了一种系统，通过使用单一视觉模型结合低分辨率的人体图像和高分辨率的目标身体部位图像（如手部），更高效地识别与物体相关的人类动作。系统首先从原始图像中提取包含人体的区域生成人体图像，然后提取包含与物体交互的目标身体部位的图像区域生成目标图像。系统使用单一视觉模型处理这两个图像，但通过不同分辨率实现更精细的目标图像处理。具体来说，系统将提取的人体图像调整为第一预设大小，将目标图像调整为第二预设大小。由于第二预设大小代表比第一预设大小更高的分辨率，因此可以实现更精细的操作性能。通过这种方式，系统能够高效地识别整个身体的粗略姿势和/或动作，同时更好地捕捉小物体和目标身体部位的细节（如手部形状、方向、物体形状和方向）。该系统消除了使用多个视觉模型分别处理不同分辨率的身体区域和目标区域的需求，从而节省了计算资源和时间，同时保持了识别准确性。

**Key Innovation (核心创新)**:  
1. 使用单一视觉模型处理不同分辨率的图像，简化了系统架构。2. 通过结合低分辨率人体图像和高分辨率目标图像，实现了高效且准确的识别。3. 引入位置嵌入技术，确保图像细节与整体场景的协调处理。

**Application Inference (应用推测)**:  
该技术可广泛应用于增强现实、机器人、工业安全和安保等领域。例如，在工业环境中，它可以用于监控工人与危险物体的交互并及时发出警报；在安保领域，它可以用于识别潜在威胁行为并通知相关人员。此外，这项技术还可以用于开发更智能的交互系统，如基于手势控制的设备或自动化生产线。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474914265)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260057705)**
<br/><br/>

---


<br/>

### 31. 弹簧加载销状态检测

**Title (EN)**: SPRING-LOADED PIN STATUS DETECTION  
**Pub. No.**: US20260056579

**Applicant**: Google LLC  
**Inventor**: [Roth Kyle Wiedrick](https://patents.google.com/?inventor=Roth+Kyle+Wiedrick&country=US&num=100&sort=new), [Scott Edmund Stanford](https://patents.google.com/?inventor=Scott+Edmund+Stanford&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
本文所述用于销状态检测的系统及其使用方法。销检测系统可以包括一个销，该销可以处于多种状态之一，例如被压下状态和未压下状态。系统可以包括一个环绕销的发射线圈和一个接收线圈。系统还可以包括一个处理系统，该处理系统用于向发射线圈发送发射信号。处理系统可以分析从接收线圈接收到的信号，以确定销的状态。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260056579_1.png)

**Technical Field (技术领域)**:  
本发明涉及电子设备连接技术领域，具体为一种用于检测设备对接时销状态的技术方案。

**Background (发明背景)**:  
许多设备使用弹簧加载的销在两个设备（如设备与底座）之间传输数据或电力。通常，底座上会有一些弹簧加载的销，当受到压力时会压下。这种压力确保设备与底座对接时销与对应的垫片之间保持持续的电气连接。虽然可以使用深度传感器来确定销是否被压下，但为了简化制造和降低成本，通常会避免使用深度传感器。为了确认设备与底座已成功对接，通常会监测一个或多个销或垫片是否存在电力信号或数据信号。如果存在电力和/或数据，设备、底座或两者可以检测到两个设备已成功对接。然而，如果垫片和弹簧加载的销部分错位，用户可能认为设备已成功对接，但由于错位，实际上无法传输电力或数据。因此，一个设备的销可能被压下，但并未与另一个设备的对应垫片接触。这种情况会导致用户沮丧，并且电力和/或数据无法按预期传输。

**Summary (发明总览)**:  
本发明提出了一种销状态检测系统及相关方法。该系统包括一个或多个销，每个销可以处于多种状态，如被压下或未压下。系统使用环绕销的发射线圈和接收线圈，通过处理系统发送信号并分析接收到的信号来确定销的状态。系统可以在不依赖与另一设备垫片的电气连接的情况下检测销是否被压下。此外，系统还能够识别销的错位情况，并在检测到错位时发出提示。

**Key Innovation (核心创新)**:  
1. 通过发射线圈和接收线圈检测销的状态，无需依赖与另一设备的电气连接。2. 能够识别销的错位情况并提供反馈，提升用户体验。3. 采用印刷电路板上的线圈设计，简化了系统结构并降低了成本。

**Application Inference (应用推测)**:  
该技术可广泛应用于平板电脑、笔记本电脑等便携式设备的底座对接系统中，用于检测设备是否正确连接并提供即时的用户反馈。此外，它还可以用于需要精确对接和状态检测的工业设备或消费电子产品中。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474913015)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260056579)**
<br/><br/>

---


<br/>

### 32. 基于电池电量的自适应人工智能控制系统

**Title (EN)**: ADAPTIVE BATTERY LEVEL-BASED CONTROL FOR AN ARTIFICIAL INTELLIGENCE (AI) SYSTEM  
**Pub. No.**: US20260056595

**Applicant**: Microsoft Technology Licensing, LLC  
**Inventor**: [Mrinal Kumar SHARMA](https://patents.google.com/?inventor=Mrinal+Kumar+SHARMA&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
一种自适应人工智能（AI）控制系统从移动设备上的软件应用程序的用户界面组件接收AI系统的提示。该自适应AI控制系统使用电池电量监控组件确定移动设备的当前电池电量。然后，自适应AI控制系统使用模型选择组件根据当前电池电量选择AI系统中的生成AI模型来生成对提示的响应。所选择的生成AI模型是AI系统中能够处理提示的多个不同生成AI模型之一，每个生成AI模型具有不同的复杂性级别。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260056595_1.png)

**Technical Field (技术领域)**:  
本发明涉及人工智能领域，具体为一种在移动设备上根据电池电量自适应调整AI系统性能的技术，旨在优化电池使用效率并平衡AI功能的复杂性与设备续航能力。

**Background (发明背景)**:  
在移动设备上运行人工智能（AI）功能对GPU、CPU和内存提出了很高的要求，尤其是生成式AI任务，如文本和图像生成，会消耗大量能量并迅速耗尽电池寿命。当电池电量较低时，用户可能无法继续使用某些AI功能或充分利用高级AI能力。尽管已有一些方法尝试改善移动设备上的AI电池使用效率，但这些方法通常侧重于静态或预定义的神经网络优化，主要关注计算负载和效率，而没有实时整合电池电量信息。因此，需要一种能够根据电池电量自适应调整生成式AI性能的系统和方法，以在不显著影响用户体验的情况下提高电池使用效率。

**Summary (发明总览)**:  
本发明提出了一种数据处理系统，通过处理器和内存执行多项功能，包括接收来自软件应用用户界面的AI系统提示，使用自适应AI控制系统的电池电量监控组件确定移动设备的当前电池电量，并根据当前电池电量选择当前电源模式（高或低）。然后，系统使用提示修改组件根据电源模式调整提示，以使AI系统生成具有不同复杂度的响应（高电量时生成高复杂度响应，低电量时生成低复杂度响应）。此外，本发明还描述了一种方法，通过选择合适的生成AI模型来生成对提示的响应，并提供提示和所选模型的指示给AI系统，从而优化电池使用效率。

**Key Innovation (核心创新)**:  
1. 根据移动设备的实时电池电量动态调整AI模型的复杂度和电源模式。2. 在保证AI功能可用性的同时，优先考虑电池续航能力。3. 通过自适应调整AI响应复杂度，平衡用户体验与设备性能。

**Application Inference (应用推测)**:  
该技术可广泛应用于智能手机、平板电脑等移动设备上的AI应用场景，如智能助手、图像生成和实时翻译等。它不仅能提升设备在低电量情况下的AI功能可用性，还能优化整体用户体验，延长设备使用时间。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474913034)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260056595)**
<br/><br/>

---


<br/>

### 33. 电池膨胀检测与自适应天线调谐

**Title (EN)**: BATTERY SWELL DETECTION AND ADAPTIVE ANTENNA TUNING  
**Pub. No.**: US20260058231

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Jason Michael Battle](https://patents.google.com/?inventor=Jason+Michael+Battle&country=US&num=100&sort=new), [Sung Hoon Oh](https://patents.google.com/?inventor=Sung+Hoon+Oh&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
一种系统，包括电池、天线和射频耦合器，射频耦合器放置在天线的发射路径中，用于生成输出信号，详细说明反射回射频功率放大器的功率量；射频信号调理电路，用于接收射频耦合器的输出信号并将其转换为模拟数字转换器可处理的信号；以及微处理器，用于根据从输出信号计算出的电池厚度位移变化是否超过膨胀响应阈值来调整电池的充电电压。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260058231_1.png)

**Technical Field (技术领域)**:  
本发明主要涉及电池管理系统和无线通信系统，具体来说是一种用于监测电子设备中电池状态并调整天线性能的技术，特别适用于使用锂离子电池和射频通信组件的设备。

**Background (发明背景)**:  
现代消费电子产品越来越依赖锂离子电池技术，因为它们具有高能量密度和可充电性。然而，这些电池会随着时间推移而逐渐老化，特别是在高温环境下运行时，会产生副产物气体，导致电池膨胀。传统监测或预测电池膨胀的方法包括预防性建模技术和基于接触的传感器方法。建模技术成本高且耗时长，而基于接触的传感器会占用宝贵的内部空间，并可能降低整体能量密度。此外，电子设备中的天线系统对周围环境的变化非常敏感，包括电池膨胀引起的机械位移，这会影响阻抗和信号性能。

**Summary (发明总览)**:  
本发明提供了一种用于实时检测电池膨胀和自适应充电控制的方法和系统。该方法包括通过放置在天线发射路径中的射频耦合器采样天线发射功率，接收射频耦合器的输出信号并通过信号调理电路和模拟数字转换器进行转换，基于输出信号计算电池的厚度位移变化，判断该变化是否超过膨胀响应阈值，并根据判断结果调整电池的充电电压。系统包括电池、天线、射频耦合器、射频信号调理电路和微处理器。微处理器根据电池厚度位移的变化来调整充电电压。

**Key Innovation (核心创新)**:  
1. 通过射频耦合器实时监测电池膨胀情况，避免了传统接触式传感器占用空间的问题。2. 基于膨胀程度自适应调整充电电压，延长电池寿命并提高安全性。3. 将膨胀检测与天线性能调谐结合，优化设备整体性能。

**Application Inference (应用推测)**:  
该技术可广泛应用于智能手机、虚拟现实头显、增强现实眼镜等便携式电子设备中，帮助优化电池管理和天线性能，提升设备可靠性和用户体验。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474914849)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260058231)**
<br/><br/>

---


<br/>

### 34. 视频录制门铃系统的自适应电源管理

**Title (EN)**: Adaptive Power Management for Video-Recording Doorbell Systems  
**Pub. No.**: US20260056592

**Applicant**: Google LLC  
**Inventor**: [Yu-Ting Yeh](https://patents.google.com/?inventor=Yu-Ting+Yeh&country=US&num=100&sort=new), [ChiHuan Chen](https://patents.google.com/?inventor=ChiHuan+Chen&country=US&num=100&sort=new), [Fu-Ming Hsu](https://patents.google.com/?inventor=Fu-Ming+Hsu&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
本文档描述了与物联网（IoT）门铃系统相关的自适应电源管理技术。这些技术将超级电容器作为IoT门铃系统的辅助电源。超级电容器具有显著优势，包括更长的循环寿命、更低的使用寿命碳足迹，以及在恶劣环境条件下更优越的性能。这些技术还包括一个自适应输入电源管理系统，通过使IoT门铃能够与较低功率的变压器（如旧住宅中常见的变压器）配合使用，从而增强了系统的兼容性。此外，还集成了一个自适应门铃提示音管理系统，以提高超级电容器供电的门铃系统的操作可靠性。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260056592_1.png)

**Technical Field (技术领域)**:  
本发明涉及智能家居设备领域，具体是针对视频录制门铃系统的电源管理技术，通过使用超级电容器和智能电源管理策略，提升门铃系统的稳定性和环保性。

**Background (发明背景)**:  
目前许多物联网门铃系统主要依赖锂电池等电池供电，但这些电池存在一些挑战，例如对环境的影响、有限的寿命以及安全隐患。例如，锂电池的生产和废弃会产生碳排放，引发环保消费者的担忧，并需要符合碳减排法规。户外恶劣环境会加速锂电池的降解，导致其寿命短于预期，需要频繁更换，这给消费者带来不便并增加了电子垃圾。在某些情况下，锂电池还可能因潜在的过热事件而带来安全风险。

**Summary (发明总览)**:  
本文档介绍了一种用于视频录制门铃系统的自适应电源管理技术。该技术将超级电容器作为辅助电源集成到物联网门铃系统中，以解决传统电池的不足。超级电容器具有长寿命、低碳足迹和在恶劣环境下表现优异的特点。此外，系统还包括一个自适应输入电源管理系统，使门铃能够与老旧住宅中常见的低功率变压器兼容。同时，系统还集成了一个自适应门铃提示音管理系统，以提高超级电容器供电门铃的可靠性。例如，公开了一种视频录制门铃，它包含一个外壳、一个或多个超级电容器、一个充电器、一个自适应输入管理模块和一个微控制器单元（MCU）。超级电容器位于外壳内，用于在主电源切换为门铃提示音供电时提供辅助电源。充电器用于为超级电容器充电。自适应输入管理模块用于检测主电源的存在并确定其输入电压。MCU用于设置初始充电电流，使用初始充电电流为超级电容器充电，并根据输入电压和电压阈值调整充电电流。另一个例子是公开了一种视频录制门铃系统，包括视频录制门铃、门铃提示音、变压器、提示音连接器、自适应输入管理模块和微控制器。视频录制门铃包含一个或多个超级电容器，用于为主电源提供辅助电源。门铃提示音与视频录制门铃电连接，并在门铃按钮被激活时产生音频信号。变压器连接到门铃提示音和视频录制门铃，用于为主电源供电。提示音连接器连接到门铃提示音和视频录制门铃，用于根据按钮的激活情况在视频录制门铃和门铃提示音之间切换主电源。自适应输入管理模块在视频录制门铃中实现，用于确定主电源的电压并基于电压确定主电源的电源质量。微控制器位于视频录制门铃内，用于设置初始充电电流，使用初始充电电流为超级电容器充电，并根据电源质量和阈值调整充电电流。另一个例子是公开了一种方法。该方法包括：检索用于为视频录制门铃的一个或多个超级电容器充电的充电电流的信息；基于充电电流的信息确定充满电所需的时间；确定门铃提示音的持续时间，基于一个或多个超级电容器的容量和放电时间；并使门铃提示音的激活时间等于或小于确定的提示音持续时间。本摘要旨在介绍视频录制门铃系统自适应电源管理的简化概念，这些概念将在下文的详细描述中进一步阐述。

**Key Innovation (核心创新)**:  
1. 采用超级电容器作为辅助电源，延长设备寿命并减少环境影响。2. 自适应输入电源管理系统使门铃兼容低功率变压器。3. 自适应门铃提示音管理系统提高了系统可靠性。

**Application Inference (应用推测)**:  
该技术适用于智能家居安防领域，尤其适用于需要长时间稳定运行且对环保有较高要求的视频门铃系统。它可以广泛应用于新旧住宅，通过提高电源兼容性和可靠性来改善用户体验。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474913030)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260056592)**
<br/><br/>

---


<br/>

### 35. 用于可穿戴设备铰链处柔性印刷电路密封的包覆成型线缆护套及其使用系统和方法

**Title (EN)**: OVERMOLDED GROMMET FOR FLEXIBLE PRINTED CIRCUIT SEALING THROUGH HINGES IN WEARABLE DEVICES, AND SYSTEMS AND METHODS OF USE THEREOF  
**Pub. No.**: US20260056418

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Isaac Finger](https://patents.google.com/?inventor=Isaac+Finger&country=US&num=100&sort=new), [Michael Webb](https://patents.google.com/?inventor=Michael+Webb&country=US&num=100&sort=new), [Yuanjing Zheng](https://patents.google.com/?inventor=Yuanjing+Zheng&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
本文公开了一种扩展现实头戴设备。该扩展现实头戴设备包括一个包含一个或多个电气组件的框架部分，以及一个包含一个或多个额外电气组件的镜腿臂。框架部分通过铰链与镜腿臂相连。扩展现实头戴设备还包括一个柔性印刷电路，用于将镜腿臂的一个或多个额外电气组件与框架的一个或多个电气组件连接。柔性印刷电路（FPC）包括：(i) 一个用于密封镜腿臂的一个或多个额外电气组件的包覆成型镜腿护套，以及 (ii) 一个用于密封框架的一个或多个电气组件的包覆成型框架护套。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260056418_1.png)

**Technical Field (技术领域)**:  
本发明涉及保护扩展现实设备中的电子元件免受液体和周围环境中碎屑的侵害，特别是通过使用线缆护套密封铰链以防止液体和碎屑接触的技术。

**Background (发明背景)**:  
当用户佩戴和使用集成电子元件的头戴设备时，这些电子元件可能会暴露于用户的汗水、雨天、意外浸水、灰尘、污垢等液体和碎屑中。当前的头戴设备主要设计用于室内使用，或者如果要在户外使用，则不希望与周围环境中的湿气或碎屑接触。如果长时间在户外使用这些现有设计，设备可能会因为湿气和碎屑进入敏感电子元件而缩短寿命。因此，需要保护头戴设备中的电子元件免受湿气和碎屑的侵害。

**Summary (发明总览)**:  
本文描述的设备在扩展现实头戴设备的框架和镜腿臂之间创建了一个防液体和碎屑的密封，其中框架和镜腿臂通过铰链连接。这种密封是通过使用与柔性印刷电路板连接的包覆成型护套实现的。这使得连接到框架和/或镜腿臂的柔性印刷电路上的电子元件不会接触到液体或碎屑，从而保持了这些电子元件的完整性。一个示例扩展现实头戴设备包括一个包含一个或多个电气组件的框架部分，以及一个包含一个或多个额外电气组件的镜腿臂。框架部分通过铰链与镜腿臂相连。扩展现实头戴设备还包括一个柔性印刷电路，用于将镜腿臂的一个或多个额外电气组件与框架的一个或多个电气组件连接。柔性印刷电路包括：(i) 一个包覆成型镜腿护套，用于密封镜腿臂的一个或多个额外电气组件，以及 (ii) 一个包覆成型框架护套，用于密封框架的一个或多个电气组件。柔性印刷电路还配置为随着镜腿臂相对于框架部分的移动而移动。本文还描述了制造扩展现实头戴设备的一个示例方法。该方法包括通过铰链将扩展现实设备的框架部分与镜腿臂部分连接。扩展现实设备的框架部分和镜腿臂部分都包含一个或多个电气组件，分别位于各自的内部。该方法还包括通过柔性印刷电路将镜腿臂的一个或多个额外电气组件与框架的一个或多个电气组件连接。该方法还包括在柔性印刷电路的第一部分上包覆成型一个镜腿护套。镜腿护套配置为密封镜腿臂的一个或多个额外电气组件。该方法还包括在柔性印刷电路的第二部分上包覆成型一个框架护套。框架护套配置为密封框架的一个或多个电气组件。

**Key Innovation (核心创新)**:  
1. 通过包覆成型护套在铰链处创建防液体和碎屑的密封，保护电子元件。2. 柔性印刷电路板与护套集成，确保设备在运动中的密封性和耐用性。3. 实现了扩展现实头戴设备在各种环境下对电子元件的可靠保护。

**Application Inference (应用推测)**:  
该技术可以广泛应用于各种可穿戴设备，如扩展现实头戴设备、智能眼镜和其他需要防水防尘保护的便携式电子设备。它特别适用于需要在动态和复杂环境中保持电子元件安全性的产品。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474912839)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260056418)**
<br/><br/>

---


<br/>

### 36. 金属板材强度增强方法

**Title (EN)**: INCREASING STRENGTH IN A METAL SHEET  
**Pub. No.**: US20260054302

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Zhicong Yao](https://patents.google.com/?inventor=Zhicong+Yao&country=US&num=100&sort=new), [Luke Murphy](https://patents.google.com/?inventor=Luke+Murphy&country=US&num=100&sort=new), [Richard Langlois](https://patents.google.com/?inventor=Richard+Langlois&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
本发明涉及在加工过程中增强金属合金强度的方法和系统。该方法包括提供金属合金，并可能包括将金属合金的一部分压平。然后，从压平的部分形成工件，工件具有顶面和底面。该方法还包括在工件的顶面上冲压第一凹坑轮廓，其中凹坑轮廓包括在工件表面上的多个凹坑凹陷。该方法还可能包括在工件的底面上冲压第二凹坑轮廓。本发明还涉及一种用于形成包含多个凹坑轮廓的工件的装置。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260054302_1.png)

**Technical Field (技术领域)**:  
本发明涉及增强金属板材强度的方法和系统，特别是在不降低延展性的前提下提高金属的强度。

**Background (发明背景)**:  
混合现实硬件需要承受各种物理条件以保持系统的运行完整性。特别是，某些内部物理组件可能由金属合金制成。使用金属可以构建具有更复杂表面结构的组件，同时保持其强度。这些金属组件可以配置为保持混合现实头戴设备中摄像头的对齐。在使用过程中，硬件可能会经历跌落和冲击，导致金属和光学组件的故障。当使用的金属合金由于包含更强的金属而具有更高的强度时，制造具有复杂结构的零件会变得困难。而使用较弱的金属时，金属组件的冲击可能导致金属和光学组件的故障。

**Summary (发明总览)**:  
本发明提供了一种增强金属合金强度的方法和系统。该方法包括提供金属合金、压平部分金属合金，并从压平的部分形成工件。工件具有顶面和底面，并在顶面和底面上分别冲压第一和第二凹坑轮廓。所述装置能够生成包含多个凹坑轮廓的工件，这些凹坑轮廓经过设计以增强工件的强度。此外，本发明还提供了一种用于增强金属合金机械性能的装置，该装置可以集成到头戴式显示器中。

**Key Innovation (核心创新)**:  
1. 通过在金属板材的顶面和底面冲压凹坑轮廓来增强其强度。2. 在不影响金属延展性的前提下提高其强度。3. 提供了一种适用于头戴式显示器的金属合金零件制造方法。

**Application Inference (应用推测)**:  
该技术可以应用于增强混合现实设备中金属组件的强度，提高其耐用性和抗冲击能力。此外，它还可以用于制造需要高强度和复杂结构的金属零件，例如航空航天、汽车工业以及消费电子产品等领域。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474910491)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260054302)**
<br/><br/>

---


<br/>

### 37. 基于人工智能的照片设计创意生成与实现

**Title (EN)**: AI-BASED PHOTO DESIGN IDEA GENERATION AND IMPLEMENTATION  
**Pub. No.**: US20260057580

**Applicant**: Microsoft Technology Licensing, LLC  
**Inventor**: [Jaimin Ajay PATEL](https://patents.google.com/?inventor=Jaimin+Ajay+PATEL&country=US&num=100&sort=new), [Srinivasa Chaitanya Kumar Reddy GOPIREDDY](https://patents.google.com/?inventor=Srinivasa+Chaitanya+Kumar+Reddy+GOPIREDDY&country=US&num=100&sort=new), [Adhiraj SOOD](https://patents.google.com/?inventor=Adhiraj+SOOD&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
数据处理系统通过客户端设备的用户界面捕捉照片；基于照片的元数据，通过插入至少一个前景对象、从元数据中提取文本作为提示的一部分或两者的组合，使用人工智能（AI）模型生成一个或多个照片设计建议图像，其中元数据包括位置、时间以及一个或多个图像标签；并将一个或多个照片设计建议图像提供给客户端设备的用户界面进行显示。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260057580_1.png)

**Technical Field (技术领域)**:  
本发明涉及人工智能在摄影领域的应用，特别是通过AI自动生成照片设计创意并提供实现机制的技术。

**Background (发明背景)**:  
人工智能有潜力通过自动化来节省时间并提高生产力。在摄影领域，AI已被用于照片拍摄和编辑工具，例如自动调整相机设置或提供构图指导。然而，用户仍然需要自行选择拍摄场景，并花费大量时间在网上寻找拍摄创意、寻找合适的场景、定位实际拍摄地点，并手动调整相机进行拍摄。现有的技术难以自动为用户提供拍摄创意和简便的拍摄实现机制，因此需要一种基于AI的照片拍摄创意生成与实现系统和方法。

**Summary (发明总览)**:  
本发明提出的数据处理系统包括处理器和存储可执行指令的机器可读介质。指令执行时，处理器单独或与其他处理器协同工作，执行以下操作：通过客户端设备的用户界面捕捉照片；基于照片的元数据，使用AI模型生成一个或多个照片设计建议图像，方法包括插入至少一个前景对象、从元数据中提取文本作为提示的一部分或两者的组合，其中元数据包括位置、时间以及一个或多个图像标签；并将建议图像提供给客户端设备的用户界面进行显示。

**Key Innovation (核心创新)**:  
1. 利用AI自动生成照片设计创意，简化用户寻找拍摄灵感的流程。2. 通过分析照片元数据（如位置、时间和图像标签），提供个性化的设计建议。3. 提供简便的实现机制，用户可以直接根据AI建议进行拍摄。

**Application Inference (应用推测)**:  
该技术可应用于智能摄影应用、社交媒体平台的照片编辑工具，以及为摄影师和设计师提供灵感的创意辅助工具。它能帮助用户快速找到拍摄创意并实现高质量的照片创作。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474914125)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260057580)**
<br/><br/>

---


<br/>

### 38. 基于全局机器学习模型的传感器端学习

**Title (EN)**: ON-SENSOR LEARNING FROM GLOBAL MACHINE LEARNING MODEL  
**Pub. No.**: US20260057247

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Syed Shakib Sarwar](https://patents.google.com/?inventor=Syed+Shakib+Sarwar&country=US&num=100&sort=new), [Barbara De Salvo](https://patents.google.com/?inventor=Barbara+De+Salvo&country=US&num=100&sort=new), [Xinqiao Liu](https://patents.google.com/?inventor=Xinqiao+Liu&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
一种可穿戴设备包括用于生成传感器数据的传感器和处理器。传感器包含计算资源，用于根据从传感器数据中提取的特征数据更新机器学习模型。处理器配置为接收来自传感器的与机器学习模型相关的加密数据，并将加密数据发送到服务器。服务器接收并发送机器学习模型的基础参数到传感器，传感器根据接收到的参数和本地存储的特征数据对基础机器学习模型进行本地更新。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260057247_1.png)

**Technical Field (技术领域)**:  
本发明主要涉及传感器端学习技术，具体是在传感器上对机器学习模型进行本地适应，同时在服务器上进行全局改进。

**Background (发明背景)**:  
在虚拟现实、增强现实或混合现实系统中，例如使用头戴设备和控制台，通常会用到机器学习模型，例如神经网络。这些模型用于为用户提供信息或了解用户与环境交互的方式。机器学习模型通常在服务器上训练，然后传输到客户端设备或其他系统，如用于人工现实的耳机，以执行这些模型。服务器接收并存储用于训练机器学习模型的训练数据。对于某些应用，机器学习模型需要使用在客户端设备上收集的数据进行训练，这些数据可能包含敏感信息，例如原始图像。因此，出于隐私考虑，用户可能不愿意分享可能对训练机器学习模型有用的原始图像。对于这类应用，服务器可能没有足够的训练数据来训练机器学习模型。如果机器学习模型使用不充分的数据进行训练，其预测准确性就会较差。

**Summary (发明总览)**:  
人工现实系统利用智能传感器和片上系统（SoC）来对机器学习模型进行本地适应。智能传感器包含计算资源，可以执行计算操作，例如机器学习模型的增量训练。服务器从多个耳机收集数据，以更新提供给耳机的基础模型。耳机根据本地存储的特征数据对基础模型进行适应。系统通过发送加密特征数据或加密参数到服务器来保护用户数据的隐私。系统在确保数据安全和隐私的同时，实现了机器学习模型的本地用户适应和全局改进。根据一个实施例，人工现实耳机的智能传感器接收机器学习模型的参数，例如最初在服务器上训练的机器学习模型的参数。智能传感器接收由智能传感器内的传感器硬件捕获的传感器数据，并存储从传感器数据中提取的特征数据。智能传感器根据本地存储的特征数据更新机器学习模型。耳机重复执行以下步骤来更新机器学习模型：智能传感器将机器学习模型的加密数据发送到耳机的SoC。加密数据可能包括加密的特征数据或机器学习模型的加密参数。耳机的SoC从耳机的多个智能传感器接收加密数据。SoC将收集到的加密数据发送到服务器。服务器从多个耳机收集加密数据，并使用收集到的数据更新基础机器学习模型。SoC从服务器接收更新后的基础机器学习模型的参数，并将基础机器学习模型的参数发送到耳机上的一个或多个智能传感器。每个智能传感器根据本地存储的特征数据对接收到的基础机器学习模型进行本地更新。系统在确保人工现实耳机用户数据隐私的同时，允许对耳机使用的机器学习模型进行定期更新，同时进行本地适应。

**Key Innovation (核心创新)**:  
1. 通过智能传感器和SoC的结合，实现机器学习模型的本地适应和全局改进。2. 采用加密技术保护用户数据隐私，确保数据安全。3. 在保证数据隐私的前提下，提升机器学习模型的预测准确性。

**Application Inference (应用推测)**:  
该技术可广泛应用于需要处理敏感数据的增强现实、虚拟现实设备，以及其他对数据隐私有高要求的智能设备中，例如健康监测设备或工业传感器系统。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474913756)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260057247)**
<br/><br/>

---


<br/>

### 39. 用于用户界面控制的接触空间确定

**Title (EN)**: CONTACT SPACE DETERMINATION FOR USER INTERFACE CONTROL  
**Pub. No.**: US20260056641

**Applicant**: GOOGLE LLC  
**Inventor**: [Dongeek Shin](https://patents.google.com/?inventor=Dongeek+Shin&country=US&num=100&sort=new), [Anuva Kulkarni](https://patents.google.com/?inventor=Anuva+Kulkarni&country=US&num=100&sort=new), [Tianyu Xu](https://patents.google.com/?inventor=Tianyu+Xu&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
所述技术通过接收来自与可穿戴设备相连的运动传感器的传感器信号，实现虚拟触控板的功能，以响应触摸事件。可穿戴设备提供具有渲染空间的用户界面，该空间相对于设备定义。触摸事件可能与相对于可穿戴设备定义的接触地图的接触空间相关联，基于传感器信号，渲染与接触空间对应的用户界面事件在渲染空间内。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260056641_1.png)

**Technical Field (技术领域)**:  
本发明涉及用户界面控制技术，特别是通过触摸事件和运动传感器信号来确定接触空间，从而实现对增强现实（XR）设备及其他类型计算设备的用户界面操作。

**Background (发明背景)**:  
传统的增强现实（XR）设备通常提供用户界面，并使用多种方式实现界面控制，例如物理按钮、基于图像的手势识别或使用外部设备（如手持控制器）。然而，这些方法可能需要占用设备表面空间或依赖额外设备。

**Summary (发明总览)**:  
本发明提出了一种通过触摸事件来控制用户界面的方法。设备（如XR设备）通过其表面的触摸事件，利用运动传感器信号确定接触空间，并基于此在用户界面的渲染空间内触发相应的界面事件。这种方法允许高度自定义用户界面控制，既方便使用，又无需在设备表面专门预留控制按钮或其他控制设备的空间。该技术不仅适用于XR设备，还可以应用于手机、笔记本电脑、智能设备等多种类型的计算设备。

**Key Innovation (核心创新)**:  
1. 通过触摸事件和运动传感器信号精确定位接触空间。2. 在用户界面的渲染空间内实时触发与接触空间对应的界面事件。3. 无需占用设备表面空间即可实现高度自定义的用户界面控制。

**Application Inference (应用推测)**:  
该技术可以广泛应用于增强现实设备、智能眼镜、手机、笔记本电脑等消费电子产品，为用户提供更自然、直观的交互方式。同时，它还可以用于需要非接触式控制的应用场景，如医疗设备、工业控制等。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474913084)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260056641)**
<br/><br/>

---


<br/>

### 40. 电池供电从属设备的节能方法

**Title (EN)**: Reduced Power Consumption on Battery Operated Follower Devices  
**Pub. No.**: US20260054162

**Applicant**: Microsoft Technology Licensing, LLC  
**Inventor**: [Tero Juhani PATANA](https://patents.google.com/?inventor=Tero+Juhani+PATANA&country=US&num=100&sort=new), [Shuoqi Scott WANG](https://patents.google.com/?inventor=Shuoqi+Scott+WANG&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
本文档主要涉及将从属设备的能耗与用户交互水平相匹配。一个示例包括一个处理器，用于运行交互式应用程序，并主动识别用户与交互式应用程序展示内容交互的活跃期以及用户不进行交互的非活跃期。该示例还包括一个通信组件，用于在识别出的活跃期内向从属设备发送第一组参数值，并在识别出的非活跃期内发送第二组参数值，从而使得从属设备使用相对较少的电量。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260054162_1.png)

**Technical Field (技术领域)**:  
本发明涉及电子设备节能技术，特别是针对电池供电设备，通过调整设备运行参数来匹配用户交互水平，从而降低能耗。

**Background (发明背景)**:  
用户通过各种输入/输出设备与电子世界进行交互。这些设备的能耗，尤其是电池供电设备的能耗，是一个重要考虑因素。从宏观角度看，节能对公共利益至关重要；从微观角度看，节能可以延长设备在单次充电后的使用时间。如果设备因电池耗尽而停止工作，用户对设备的满意度往往会降低。

**Summary (发明总览)**:  
本发明主要关注将从属设备的能耗与用户交互水平相匹配。一个示例包括一个处理器，用于运行交互式应用程序，并主动识别用户与应用程序展示内容交互的活跃期以及用户不交互或预期不交互的非活跃期。该示例还包括一个通信组件，用于在活跃期内向从属设备发送一组参数值，并在非活跃期内发送另一组参数值，使得从属设备在这些非活跃期内使用较少的电量。本摘要旨在以简化的形式介绍一些概念，这些概念将在详细说明中进一步描述。本摘要并非旨在确定所主张主题的关键特征或必要特征，也不旨在限制所主张主题的范围。详细说明将结合附图进行描述。在附图中，参考编号最左边的数字表示参考编号首次出现的附图。在描述和附图中，不同实例中使用相似的参考编号可能表示相似或相同的项目。

**Key Innovation (核心创新)**:  
1. 通过识别用户交互的活跃期和非活跃期，动态调整设备参数。2. 在非活跃期内发送低能耗参数值，显著降低设备功耗。3. 在不影响用户体验的前提下，实现节能。

**Application Inference (应用推测)**:  
该技术可广泛应用于各种电池供电设备，如智能手表、无线耳机、游戏手柄等，尤其适用于需要长时间运行且用户交互频繁的设备。它不仅能延长设备续航，还能提升用户体验。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474910335)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260054162)**
<br/><br/>

---


<br/>

### 41. 用于透视增强现实显示的装置、系统和方法

**Title (EN)**: APPARATUS, SYSTEMS, AND METHODS FOR SEE-THROUGH AUGMENTED REALITY DISPLAYS  
**Pub. No.**: US20260056413

**Applicant**: Meta Platforms Technologies, LLC  
**Inventor**: [Ali Altaqui](https://patents.google.com/?inventor=Ali+Altaqui&country=US&num=100&sort=new), [Steven John Robbins](https://patents.google.com/?inventor=Steven+John+Robbins&country=US&num=100&sort=new), [Brian Schowengerdt](https://patents.google.com/?inventor=Brian+Schowengerdt&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
一种可穿戴的头戴式设备可以包括：(i) 一个包含至少一层胆甾相液晶(CLC)层的显示屏幕，其中CLC层包含一个手性层，使得具有第一手性的入射圆偏振光在共振波长附近表现出窄带反射，而具有与第一手性相反手性的入射圆偏振光则透过CLC层；(ii) 一个用于在佩戴者眼前固定显示屏幕的外壳。在某些实施例中，该设备还可以包括一个物理处理器，用于将数据传送到显示屏幕上。此外，还公开了各种其他方法、系统以及计算机可读介质。

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260056413_1.png)

**Technical Field (技术领域)**:  
本发明涉及增强现实(AR)和虚拟现实(VR)技术领域，具体涉及一种用于透视增强现实显示的设备和方法。

**Background (发明背景)**:  
随着增强现实和虚拟现实技术的发展，用户对更轻便、更高效的显示设备的需求日益增长。传统的显示设备通常使用复杂的透镜系统和光源，这不仅增加了设备的重量和体积，还可能导致视觉疲劳和不适。因此，需要一种更先进的技术来改善显示效果并提升用户体验。

**Summary (发明总览)**:  
本发明提出了一种新型头戴式设备，其核心是使用胆甾相液晶(CLC)层作为显示屏幕的关键组件。CLC层能够选择性地反射特定波长的圆偏振光，同时允许其他光透过，从而实现高对比度的显示效果。设备还包括一个处理器，用于处理和传输要显示的数据。通过这种设计，设备可以提供更清晰、更逼真的增强现实体验，同时保持轻便和舒适。

**Key Innovation (核心创新)**:  
1. 采用胆甾相液晶(CLC)层实现高效的光学显示效果。2. 通过选择性地反射和透过圆偏振光，提升显示对比度和清晰度。3. 结合处理器和CLC层技术，提供更轻便、更高效的增强现实体验。

**Application Inference (应用推测)**:  
该技术可以广泛应用于增强现实和虚拟现实设备，例如智能眼镜、头戴显示器和手持AR设备。它不仅能提升用户的视觉体验，还能用于游戏、教育、医疗和工业培训等领域。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474912834)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260056413)**
<br/><br/>

---


<br/>

### 42. 宽频微扬声器压缩驱动器

**Title (EN)**: COMPRESSION DRIVER WIDE BAND MICROSPEAKER  
**Pub. No.**: US20260059228

**Applicant**: Google LLC  
**Inventor**: [Mark William Starnes](https://patents.google.com/?inventor=Mark+William+Starnes&country=US&num=100&sort=new), [Anthony King](https://patents.google.com/?inventor=Anthony+King&country=US&num=100&sort=new)  
**Publication Date**: 26.02.2026

**Abstract**:  
一种微扬声器包括一个界定空间的框架；以及一个置于该空间内的致动器，该致动器包括一个在操作过程中沿第一方向振动的振膜。振膜的中心轴沿第一方向延伸。一个与框架机械连接的板组件定义了从空间内排出流体的路径。板组件包括：一个在平面内延伸并界定与中心轴在平面内偏移的第一孔的第一板；以及一个界定被中心轴穿过的第二孔的第二板。第二板包括：与第二孔相邻的内凹区域；以及一个外凸区域。第一板与第二板机械连接，第一板和第二板的内部区域

**Patent Drawings**:

![Patent Drawing]({{ site.baseurl }}/assets/images/2026-03/US20260059228_1.png)

**Technical Field (技术领域)**:  
本发明涉及音频扬声器领域，特别是微扬声器。

**Background (发明背景)**:  
本发明涉及微扬声器。电子设备可以通过扬声器播放多媒体内容，包括音频，以提供音调、语音生成或录音输出。一些扬声器设计得较小，以便轻松集成到各种不同尺寸的电子设备中（例如手机、智能家居设备）。某些扬声器可以产生音频和超声波频率。微扬声器是紧凑型扬声器。一些微扬声器可以产生超声波频率。发射超声波可以用于多种功能，包括测距和面部识别。微扬声器可以包括一个用于从微扬声器腔室排出空气的端口。该端口可以位于微扬声器的侧面。当从端口发射的声波波长大约与微扬声器尺寸相同或更小时，腔室内可能会出现模态效应，导致声音响应不平滑。对于超声波频率，这可能会限制设备在狭窄频率范围内高效运行。

**Summary (发明总览)**:  
本发明公开了一种压缩驱动器宽频微扬声器。该微扬声器可以产生人耳可听见的频率和人耳无法听见的频率（例如超声波）。微扬声器的空气可以从振膜周围排出，振膜可以沿第一轴向振动。微扬声器的中心轴沿第一方向延伸。空气以压力波的形式通过空气路径从微扬声器的边缘向内引导，朝向微扬声器的中心轴。空气路径可以将压力波以直角引导至单一出口管。出口管可以位于微扬声器的顶部，其面积被微扬声器的中心轴穿过。压缩驱动器宽频微扬声器可以用于具有超声波发射和/或检测功能的微扬声器的各种设备中。例如，手机可以使用超声波信号来评估外部区域的对象，以提高面部授权和反欺骗安全措施的鲁棒性。

**Key Innovation (核心创新)**:  
1. 通过边缘排气设计，微扬声器实现了更高的声压级和更平滑的频率响应。2. 压力波从边缘向中心引导的设计提高了微扬声器的频率操作灵活性，扩展了其工作带宽。3. 优化的空气路径设计使得微扬声器能够在更小的尺寸下实现更高的效率和声压级。

**Application Inference (应用推测)**:  
该微扬声器可以广泛应用于手机、可穿戴设备、耳机等需要高效宽频音频输出的设备中。它特别适用于需要超声波功能的应用，例如面部识别和测距。此外，它还可以用于增强现实（AR）和虚拟现实（VR）设备，提供更高质量的音频体验。

**[View Full Patent @ WIPO](https://patentscope.wipo.int/search/en/detail.jsf?docId=US474915954)**  
**[View Full Patent @ Google Patents](https://patents.google.com/patent/US20260059228)**
<br/><br/>

---



**Total Patents**: 42  
**Last Updated**: 20260312

---

*The Patent Scoop Trio*
