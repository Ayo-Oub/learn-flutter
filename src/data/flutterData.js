export const flutterWidgets = [
  {
    id: 'scaffold',
    name: 'Scaffold',
    arabicName: 'الهيكل الإنشائي (Scaffold)',
    category: 'الهيكل والترتيب',
    shortDescription: 'يوفر الهيكل البصري الأساسي لتطبيق يتبع واجهات Material Design.',
    explanation: 'Scaffold هو أحد أكثر العناصر الأساسية في فلاتر. يُعتبر "اللوحة" أو "الهيكل" الذي تبنى عليه شاشة التطبيق. يوفر لك منافذ جاهزة ومنظمة لوضع الأجزاء الرئيسية من الصفحة مثل شريط التطبيق العلوي (AppBar)، وجسم الشاشة (body)، والزر العائم (FloatingActionButton)، والقائمة الجانبية (Drawer)، وشريط التنقل السفلي (BottomNavigationBar). بدون استخدام Scaffold، سيتعين عليك بناء هذه الأقسام وترتيبها يدوياً وهو أمر معقد وغير منظم.',
    properties: [
      {
        name: 'appBar',
        description: 'شريط التطبيق العلوي. يعرض عادةً عنوان الصفحة وأزرار الرجوع والإجراءات كالبحث والإعدادات.',
        example: "appBar: AppBar(\n  title: const Text('تطبيق فلاتر الأول'),\n  backgroundColor: Colors.blue,\n)"
      },
      {
        name: 'body',
        description: 'المحتوى الرئيسي المفتوح للشاشة. يوضع فيه أي ويدجت آخر مثل Column أو ListView أو Center ليتم عرضه في المساحة المتبقية من الشاشة.',
        example: "body: const Center(\n  child: Text('مرحباً بك في فلاتر بالعربية!'),\n)"
      },
      {
        name: 'floatingActionButton',
        description: 'زر تفاعلي عائم دائري يظهر عادةً في الزاوية السفلية لإجراء رئيسي وسريع وسهل الوصول في الصفحة.',
        example: "floatingActionButton: FloatingActionButton(\n  onPressed: () {\n    print('تم الضغط!');\n  },\n  child: const Icon(Icons.add),\n)"
      },
      {
        name: 'drawer',
        description: 'قائمة أو درج جانبي مخفي ينزلق من جانب الشاشة (اليمين في واجهات اللغة العربية واليسار في الإنجليزية) يعرض روابط التنقل.',
        example: "drawer: Drawer(\n  child: ListView(\n    children: const [DrawerHeader(child: Text('القائمة'))],\n  ),\n)"
      },
      {
        name: 'bottomNavigationBar',
        description: 'شريط تنقل سفلي يحتوي على أيقونات وعناوين للانتقال السريع والسهل بين شاشات التطبيق الأساسية.',
        example: "bottomNavigationBar: BottomNavigationBar(\n  items: const [\n    BottomNavigationBarItem(icon: Icon(Icons.home), label: 'الرئيسية'),\n    BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'الإعدادات'),\n  ],\n)"
      },
      {
        name: 'backgroundColor',
        description: 'تحديد لون خلفية شاشة التطبيق بالكامل بشكل مباشر وسهل.',
        example: "backgroundColor: Colors.grey[200]"
      }
    ],
    codeExample: `import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('تطبيق فلاتر الأول'),
          backgroundColor: Colors.blue,
        ),
        body: const Center(
          child: Text(
            'مرحباً بك في فلاتر بالعربية!',
            style: TextStyle(fontSize: 20),
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {},
          backgroundColor: Colors.blue,
          child: const Icon(Icons.add),
        ),
      ),
    );
  }
}`,
    notes: [
      'استخدم Scaffold دائماً كعنصر أساسي عند إنشاء شاشة جديدة في تطبيقك ليتحمل تنسيق محتويات الصفحة تلقائياً.',
      'يتعامل Scaffold تلقائياً مع المساحات الآمنة (SafeArea) ويقوم بحساب هوامش لوحة المفاتيح عند ظهورها لمنع اختفاء حقول الإدخال.',
      'يمكنك تغيير لون خلفية الشاشة بالكامل عبر خاصية backgroundColor داخل Scaffold.'
    ],
    mistakes: [
      'وضع أكثر من Scaffold واحد في نفس الشاشة، مما يسبب تداخلاً في أشرطة التطبيقات والرسائل التنبيهية (Snackbars).',
      'نسيان استخدام Scaffold نهائياً في الشاشات الجديدة، مما ينتج عنه شاشة سوداء مع نصوص غريبة تظهر تحتها خطوط حمراء أو صفراء مزدوجة لأن النصوص تفتقر إلى ثيم التنسيق الافتراضي.'
    ],
    docLink: 'https://api.flutter.dev/flutter/material/Scaffold-class.html'
  },
  {
    id: 'appbar',
    name: 'AppBar',
    arabicName: 'شريط التطبيق (AppBar)',
    category: 'الهيكل والترتيب',
    shortDescription: 'الشريط العلوي للشاشة الذي يعرض العنوان والأزرار وإجراءات التنقل.',
    explanation: 'AppBar هو شريط الأدوات العلوي الذي يظهر في أعلى الشاشة. يسهل عملية التنقل ويوفر مكاناً واضحاً لعنوان الصفحة الحالية. يتكون عادةً من ثلاثة أجزاء رئيسية: leading (أيقونة على اليسار للرجوع أو فتح القائمة الجانبية)، وtitle (العنوان النصي أو شعار التطبيق)، وactions (قائمة من الأيقونات والأزرار التفاعلية على اليمين مثل البحث أو الإعدادات).',
    properties: [
      {
        name: 'title',
        description: 'العنوان الرئيسي لشريط التطبيق، وعادةً ما يكون عبارة عن ويدجت Text، ولكن يمكن أن يكون أي ويدجت كصورة أو حقل إدخال.',
        example: "title: const Text('تفاصيل المنتج')"
      },
      {
        name: 'leading',
        description: 'ويدجت يظهر في بداية شريط التطبيق (اليمين في العربية واليسار في الإنجليزية). يُستخدم غالباً لأزرار القائمة أو الرجوع للخلف.',
        example: "leading: IconButton(\n  icon: const Icon(Icons.arrow_back),\n  onPressed: () => Navigator.pop(context),\n)"
      },
      {
        name: 'actions',
        description: 'قائمة من الوجاتس (الأزرار) تظهر في نهاية شريط التطبيق لاستدعاء إجراءات إضافية مثل البحث، الإشعارات أو المشاركة.',
        example: "actions: [\n  IconButton(icon: const Icon(Icons.search), onPressed: () {}),\n  IconButton(icon: const Icon(Icons.share), onPressed: () {}),\n]"
      },
      {
        name: 'centerTitle',
        description: 'قيمة منطقية (true أو false) لتحديد ما إذا كان يجب توسيط العنوان في منتصف شريط التطبيق أم لا.',
        example: "centerTitle: true"
      },
      {
        name: 'backgroundColor',
        description: 'تحديد اللون المخصص لخلفية شريط التطبيق.',
        example: "backgroundColor: Colors.indigo"
      },
      {
        name: 'elevation',
        description: 'درجة ارتفاع شريط التطبيق ومقدار الظل الساقط منه على جسم التطبيق. ضبطه على 0.0 يجعله مسطحاً تماماً.',
        example: "elevation: 4.0"
      }
    ],
    codeExample: `AppBar(
  title: const Text('تفاصيل المنتج'),
  centerTitle: true,
  backgroundColor: Colors.indigo,
  elevation: 4.0,
  leading: IconButton(
    icon: const Icon(Icons.arrow_back),
    onPressed: () {
      // الرجوع للشاشة السابقة
    },
  ),
  actions: [
    IconButton(
      icon: const Icon(Icons.search),
      onPressed: () {},
    ),
    IconButton(
      icon: const Icon(Icons.more_vert),
      onPressed: () {},
    ),
  ],
)`,
    notes: [
      'يقوم AppBar بإضافة زر الرجوع تلقائياً إذا كان هناك مسار سابق في التنقل، ويمكن إلغاء هذا السلوك عبر ضبط automaticallyImplyLeading إلى false.',
      'يمكنك استخدام خاصية elevation للتحكم في مدى بروز ظل شريط التطبيق لتصميمه بشكل مسطح (Flat) أو بارز.',
      'خاصية title تقبل أي ويدجت وليس النصوص فقط؛ يمكنك وضع صورة أو حقل إدخال للبحث.'
    ],
    mistakes: [
      'وضع الكثير من الأزرار في قسم actions مما يؤدي لتداخلها مع العنوان أو حدوث مشكلة تجاوز الحدود المتاحة (Overflow).',
      'نسيان أن AppBar يجب أن يوضع كقيمة لخاصية appBar في ويدجت Scaffold ليعمل بشكل صحيح ويأخذ موضعه الصحيح تلقائياً.'
    ],
    docLink: 'https://api.flutter.dev/flutter/material/AppBar-class.html'
  },
  {
    id: 'text',
    name: 'Text()',
    arabicName: 'ويدجت النص (Text)',
    category: 'العناصر الأساسية',
    shortDescription: 'ويدجت بسيط يقوم بعرض سلسلة نصية بتنسيق محدد.',
    explanation: 'ويدجت Text هو الأداة الأساسية لعرض الكلمات والجمل في فلاتر. بمجرد تمرير نص إليه، يقوم برسمه على الشاشة. يدعم العديد من الخصائص للتحكم في السلوك العام للنص، مثل اتجاه محاذاة النص (textAlign)، وكيفية التصرف عند تجاوز النص للحدود المتاحة (overflow)، والحد الأقصى للسطور المسموح بعرضها (maxLines). لتغيير لونه وحجمه، نستخدم خاصية style ونمرر لها كائن TextStyle.',
    properties: [
      {
        name: 'data (أول معامل)',
        description: 'النص النصي الفعلي (String) المراد رسمه وعرضه على الشاشة. هو المعامل المطلوب الوحيد.',
        example: "Text('أهلاً بكم في فلاتر بالعربية!')"
      },
      {
        name: 'style',
        description: 'يستقبل كائن TextStyle لتحديد المظهر الجمالي للنص مثل اللون، الحجم، نوع الخط وسمكه.',
        example: "style: const TextStyle(\n  fontSize: 18.0,\n  color: Colors.blue,\n)"
      },
      {
        name: 'textAlign',
        description: 'يتحكم في محاذاة النص أفقياً داخل المساحة المحددة له (مثل محاذاة في المنتصف، اليمين، اليسار أو ملء السطر).',
        example: "textAlign: TextAlign.center"
      },
      {
        name: 'textDirection',
        description: 'يحدد اتجاه قراءة النص (من اليمين لليسار RTL أو من اليسار لليمين LTR)، وهو ضروري للتأكد من تنسيق النصوص العربية.',
        example: "textDirection: TextDirection.rtl"
      },
      {
        name: 'maxLines',
        description: 'الحد الأقصى للسطور المسموح للنص بعرضها وتجاوزها قبل أن يتم قصه ومنعه من النزول لسطور أخرى.',
        example: "maxLines: 2"
      },
      {
        name: 'overflow',
        description: 'يحدد كيفية التعامل مع النص عندما يتجاوز الحدود المخصصة له ويخرج عنها، مثل قطع النص ووضع نقاط متتالية (Ellipsis).',
        example: "overflow: TextOverflow.ellipsis"
      }
    ],
    codeExample: `Text(
  'تعلم فلاتر خطوة بخطوة باللغة العربية مع تطبيق تفاعلي رائع!',
  textAlign: TextAlign.center,
  textDirection: TextDirection.rtl,
  maxLines: 2,
  overflow: TextOverflow.ellipsis,
  style: TextStyle(
    fontSize: 18.0,
    color: Colors.grey[800],
  ),
)`,
    notes: [
      'عند بناء تطبيق يدعم لغات متعددة، استخدم خاصية textDirection للتأكد من عرض النصوص العربية من اليمين لليسار بشكل سليم.',
      'استخدم قيمة TextOverflow.ellipsis لعرض ثلاث نقاط (...) تلقائياً عند نهاية النص إذا كان أطول من المساحة المتاحة له.'
    ],
    mistakes: [
      'كتابة نصوص طويلة جداً داخل صف (Row) بدون تغليف ويدجت Text بويدجت مرن مثل Expanded أو Flexible، مما يؤدي لظهور الخطوط المخططة بالأصفر والأسود التي تشير لخطأ تجاوز المساحة الرسومية (Overflow).'
    ],
    docLink: 'https://api.flutter.dev/flutter/widgets/Text-class.html'
  },
  {
    id: 'textstyle',
    name: 'TextStyle()',
    arabicName: 'تنسيق النصوص (TextStyle)',
    category: 'التصميم والتنسيق',
    shortDescription: 'فئة برمجية لتحديد حجم ولون وخط وتنسيق ويدجت النص.',
    explanation: 'TextStyle ليس ويدجت يتم إضافته مباشرة لشجرة العناصر، بل هو كائن (Object) يتم تمريره لخاصية style في ويدجت Text. يسمح لك بتخصيص المظهر الجمالي للنص بالكامل. يمكنك من خلاله ضبط الحجم (fontSize)، وتغيير سماكة الخط (fontWeight)، واختيار لون مخصص (color)، وإضافة تأثيرات مثل الخط السفلي (decoration: TextDecoration.underline)، وتعديل المسافات بين الحروف أو السطور.',
    properties: [
      {
        name: 'fontSize',
        description: 'حجم الخط بالنقاط (double). لتكبير أو تصغير حجم الكلمات المعروضة على الشاشة.',
        example: "fontSize: 22.0"
      },
      {
        name: 'color',
        description: 'تلوين الكلمات بلون محدد من فئة الألوان (Colors) التابعة لـ Material Design.',
        example: "color: Colors.deepPurple"
      },
      {
        name: 'fontWeight',
        description: 'سمك الخط (كثافته)، مثل جعل النص عريضاً (bold) أو خفيفاً (w300).',
        example: "fontWeight: FontWeight.bold"
      },
      {
        name: 'fontStyle',
        description: 'أسلوب الخط (هل هو خط مائل italic أم خط عادي normal).',
        example: "fontStyle: FontStyle.italic"
      },
      {
        name: 'fontFamily',
        description: 'نوع أو اسم عائلة الخط المراد استخدامه لعرض النص (مثل خط Cairo أو Arial).',
        example: "fontFamily: 'Cairo'"
      },
      {
        name: 'letterSpacing',
        description: 'تحديد المسافة الفاصلة أفقياً بين الحروف في الكلمات.',
        example: "letterSpacing: 1.5"
      },
      {
        name: 'decoration',
        description: 'إضافة خطوط تزيين حول النص، مثل وضع خط تحت الكلمات، أو شطبها بخط في المنتصف.',
        example: "decoration: TextDecoration.underline"
      }
    ],
    codeExample: `Text(
  'تصميم فريد وجذاب',
  style: TextStyle(
    fontSize: 24.0,
    fontWeight: FontWeight.bold,
    color: Colors.deepPurple,
    fontStyle: FontStyle.italic,
    letterSpacing: 1.5,
    wordSpacing: 2.0,
    decoration: TextDecoration.underline,
    decorationColor: Colors.deepPurple,
    decorationStyle: TextDecorationStyle.dashed,
  ),
)`,
    notes: [
      'بدلاً من كتابة TextStyle مخصص لكل نص في تطبيقك، يفضل استخدام السمات العامة للتطبيق (Theme.of(context).textTheme) لتوحيد هوية التصميم البصرية وسهولة إدارتها.',
      'يدعم TextStyle ربط خطوط مخصصة من Google Fonts أو من ملفات محلية بتمرير اسم الخط لخاصية fontFamily.'
    ],
    mistakes: [
      'استخدام قيم خطوط ثابتة وضخمة جداً دون مراعاة أن بعض المستخدمين يقومون بتفعيل خيار "تكبير الخطوط" في إعدادات إمكانية الوصول لهواتفهم، مما قد يخرب الواجهة. يفضل استعمال أحجام متجاوبة أو استخدام عوامل التكبير التلقائي.'
    ],
    docLink: 'https://api.flutter.dev/flutter/painting/TextStyle-class.html'
  },
  {
    id: 'container',
    name: 'Container()',
    arabicName: 'الحاوية (Container)',
    category: 'الهيكل والترتيب',
    shortDescription: 'ويدجت متعدد الاستخدامات يدمج بين الرسم وتحديد الأبعاد والموقع والهوامش.',
    explanation: 'Container هو الويدجت الأكثر مرونة وتعدداً للاستخدامات في فلاتر. يعمل كحاوية للعناصر الأخرى ويمكّنك من التحكم في أبعادها (width, height), وإضافة هوامش داخلية (padding) لتوفير مساحة حول المحتوى، وهوامش خارجية (margin) للابتعاد عن العناصر المجاورة. كما يوفر خاصية decoration التي تقبل كائن BoxDecoration لرسم حدود ملونة (borders)، وتدوير الزوايا (borderRadius)، وإضافة ظلال (boxShadow)، ورسم خلفيات متدرجة (gradient).',
    properties: [
      {
        name: 'width',
        description: 'عرض الحاوية أفقياً بالبكسل (double).',
        example: "width: 200.0"
      },
      {
        name: 'height',
        description: 'ارتفاع الحاوية رأسياً بالبكسل (double).',
        example: "height: 150.0"
      },
      {
        name: 'padding',
        description: 'الهامش الداخلي. المسافة الفارغة الفاصلة بين حدود الحاوية وبين المحتوى الداخلي لها (الـ child).',
        example: "padding: const EdgeInsets.all(16.0)"
      },
      {
        name: 'margin',
        description: 'الهامش الخارجي. المسافة الفارغة التي تفصل بين حدود الحاوية الخارجية وبين الوجاتس الأخرى المجاورة لها.',
        example: "margin: const EdgeInsets.symmetric(horizontal: 12.0)"
      },
      {
        name: 'color',
        description: 'لون خلفية الحاوية. تنبيه هام جداً: لا يجب استخدامه مع وجود decoration لتجنب حدوث أخطاء تشغيل.',
        example: "color: Colors.teal"
      },
      {
        name: 'decoration',
        description: 'لتصميم خلفية الحاوية بشكل متقدم، مثل رسم زوايا دائرية، أو حدود ملونة، أو وضع ظلال، أو خلفية متدرجة (gradient). يستقبل BoxDecoration.',
        example: "decoration: BoxDecoration(\n  color: Colors.teal,\n  borderRadius: BorderRadius.circular(15.0),\n)"
      },
      {
        name: 'alignment',
        description: 'تحديد كيفية محاذاة ووضع الويدجت الداخلي (child) داخل المساحة الشاغرة للحاوية.',
        example: "alignment: Alignment.center"
      },
      {
        name: 'child',
        description: 'الويدجت الفرعي الذي سيتم احتواؤه وتنسيقه ورسمه بداخل الحاوية.',
        example: "child: const Text('أهلاً بك داخل الحاوية!')"
      }
    ],
    codeExample: `Container(
  width: 250.0,
  height: 150.0,
  margin: const EdgeInsets.all(12.0),
  padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
  decoration: BoxDecoration(
    color: Colors.teal,
    borderRadius: BorderRadius.circular(15.0),
    boxShadow: [
      BoxShadow(
        color: Colors.black26,
        blurRadius: 10.0,
        offset: const Offset(0, 5),
      ),
    ],
    border: Border.all(
      color: Colors.tealAccent,
      width: 2.0,
    ),
  ),
  child: const Center(
    child: Text(
      'محتوى الحاوية',
      style: TextStyle(color: Colors.white, fontSize: 18),
    ),
  ),
)`,
    notes: [
      'إذا كنت تحتاج فقط إلى ضبط هوامش (padding) حول ويدجت الآخر دون الحاجة لتلوينه أو وضع حدود له، فمن الأفضل أداءً استخدام ويدجت Padding بدلاً من Container.',
      'إذا كنت تحتاج فقط لوضع مساحة فارغة ثابتة الأبعاد، فاستخدم SizedBox بدلاً من Container لأنه أخف بكثير على الذاكرة ومعالج الرسوميات.'
    ],
    mistakes: [
      'محاولة تمرير خاصية color مباشرة لـ Container عندما تكون خاصية decoration مستخدمة. سيتسبب هذا فوراً في خطأ تشغيل (Assertion Error)؛ يجب دائماً وضع اللون داخل كائن BoxDecoration كقيمة لـ decoration.color.'
    ],
    docLink: 'https://api.flutter.dev/flutter/widgets/Container-class.html'
  },
  {
    id: 'column',
    name: 'Column()',
    arabicName: 'عمود العناصر (Column)',
    category: 'الهيكل والترتيب',
    shortDescription: 'يرتب مجموعة من الوجاتس عمودياً (من الأعلى إلى الأسفل) بشكل متتالٍ.',
    explanation: 'Column هو ويدجت تخطيط أساسي في فلاتر يقوم بترتيب عناصره الأبناء (children) بشكل عمودي، أي من الأعلى إلى الأسفل. يُعتبر أحد أهم الوجاتس في بناء واجهات المستخدم إلى جانب أخيه Row الذي يرتب العناصر أفقياً. يمكنك من خلال Column التحكم في كيفية توزيع الأبناء على طول المحور الرئيسي (الرأسي) عبر خاصية mainAxisAlignment، والتحكم في محاذاتهم عبر المحور العكسي (الأفقي) عبر خاصية crossAxisAlignment. تنبيه هام: لا يمكن لـ Column التمرير بنفسه، فإذا تجاوزت العناصر ارتفاع الشاشة ستحصل على خطأ Overflow. في هذه الحالة استخدم ListView بدلاً منه.',
    properties: [
      {
        name: 'children',
        description: 'قائمة من الوجاتس الأبناء (List<Widget>) التي سيتم ترتيبها عمودياً داخل العمود من الأعلى للأسفل.',
        example: "children: [\n  Text('العنصر الأول'),\n  Text('العنصر الثاني'),\n  Text('العنصر الثالث'),\n]"
      },
      {
        name: 'mainAxisAlignment',
        description: 'يتحكم في توزيع الأبناء على طول المحور الرئيسي (الرأسي). القيم المتاحة: start (الأعلى)، end (الأسفل)، center (المنتصف)، spaceBetween، spaceAround، spaceEvenly.',
        example: "mainAxisAlignment: MainAxisAlignment.center"
      },
      {
        name: 'crossAxisAlignment',
        description: 'يتحكم في محاذاة الأبناء على طول المحور العكسي (الأفقي). القيم المتاحة: start، end، center، stretch (امتداد لملء العرض الكامل).',
        example: "crossAxisAlignment: CrossAxisAlignment.start"
      },
      {
        name: 'mainAxisSize',
        description: 'يحدد حجم العمود على المحور الرئيسي. القيمة max (افتراضية) تجعل العمود يأخذ أقصى ارتفاع متاح، والقيمة min تجعله يتقلص ليناسب محتواه فقط.',
        example: "mainAxisSize: MainAxisSize.min"
      },
      {
        name: 'verticalDirection',
        description: 'يتحكم في اتجاه رسم الأبناء، إما من الأعلى للأسفل (down وهو الافتراضي) أو من الأسفل للأعلى (up).',
        example: "verticalDirection: VerticalDirection.up"
      }
    ],
    codeExample: `import 'package:flutter/material.dart';

class ProfileCard extends StatelessWidget {
  const ProfileCard({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('بطاقة المستخدم')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const CircleAvatar(
              radius: 50,
              backgroundImage: NetworkImage(
                'https://i.pravatar.cc/150',
              ),
            ),
            const SizedBox(height: 16),
            const Text(
              'أحمد محمد',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 8),
            const Text(
              'مطور تطبيقات فلاتر',
              style: TextStyle(
                fontSize: 16,
                color: Colors.grey,
              ),
            ),
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: () {},
              child: const Text('تواصل معي'),
            ),
          ],
        ),
      ),
    );
  }
}`,
    notes: [
      'إذا تجاوزت عناصر Column مساحة الشاشة الرأسية ستظهر خطأ Overflow. الحل: استبدل Column بـ ListView أو قم بتغليف Column بـ SingleChildScrollView.',
      'استخدم ويدجت Expanded أو Flexible داخل Column لتوزيع المساحة المتبقية بشكل تناسبي بين الأبناء بدلاً من تحديد الأبعاد يدوياً.',
      'يُفضل استخدام SizedBox(height: X) بدلاً من Container بارتفاع ثابت لإضافة مسافات فارغة بين عناصر العمود لأنه أخف وزناً.'
    ],
    mistakes: [
      'وضع ويدجت يأخذ ارتفاعاً غير محدود (مثل ListView أو Column آخر) مباشرةً داخل Column دون تغليفه بـ Expanded، مما يسبب فوراً خطأ hasSize أو Unbounded height.',
      'الخلط بين mainAxisAlignment وcrossAxisAlignment: يتذكر المحور الرئيسي لـ Column هو الرأسي (للأعلى والأسفل) والمحور العكسي هو الأفقي (لليمين واليسار)، عكس Row تماماً.'
    ],
    docLink: 'https://api.flutter.dev/flutter/widgets/Column-class.html'
  }
];
