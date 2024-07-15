// function searchTable() {
//     // Declare variables
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("searchBox");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");

//     // Loop through all table rows, and hide those who don't match the search query
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }

// // Insert table data into the table body
// function insertTableData(data) {
//     var tableBody = document.getElementById("tableBody");
//     for (var i = 0; i < data.length; i++) {
//         var row = `<tr>
//                     <td>${data[i].Title}</td>
//                     <td>${data[i].Author}</td>
//                     <td>${data[i].Journal}</td>
//                     <td>${data[i].Volume} / ${data[i].Issue} / ${data[i].Pages}</td>
//                     <td>${data[i].Year}</td>
//                     <td>${data[i].Citations}</td>
//                   </tr>`;
//         tableBody.innerHTML += row;
//     }
// }

// // Example data
// var data = [

//     {
//         Title: "Dissecting wireless body area networks routing protocols: Classification, comparative analysis, and research challenges",
//         Author: "B Narwal, M Malik, AK Mohapatra, N Baliyan, V Shukla, M Kumar",
//         Journal: "International Journal of Communication Systems",
//         Volume: "37",
//         Issue: "1",
//         Pages: "e5637",
//         Year: "2024",
//         Citations: "-"
//     },
//     {
//         Title: "A face recognition taxonomy and review framework towards dimensionality, modality and feature quality",
//         Author: "Ipsita Pattnaik, Amita Dev, AK Mohapatra",
//         Journal: "Engineering Applications of Artificial Intelligence",
//         Volume: "126",
//         Issue: "",
//         Pages: "107056",
//         Year: "2023",
//         Citations: "1"
//     },
//     {
//         Title: "BPADTA: Blockchain-based privacy-preserving authentication scheme for digital twin empowered aerospace industry",
//         Author: "P Aggarwal, B Narwal, S Purohit, AK Mohapatra",
//         Journal: "Computers and Electrical Engineering",
//         Volume: "111",
//         Issue: "",
//         Pages: "108889",
//         Year: "2023",
//         Citations: "-"
//     },
//     {
//         Title: "Classifying Turkey Earthquake Tweets to Classify Them Based On Their Sentiment",
//         Author: "A Verma, S Bansal, P Gera, AK Mohapatra",
//         Journal: "6th International Conference on Contemporary Computing and Informatics",
//         Volume: "6",
//         Issue: "",
//         Pages: "906-911",
//         Year: "2023",
//         Citations: "-"
//     },
//     {
//         Title: "Comparative Analysis of Models for Movie Review Sentiment Analysis",
//         Author: "H Agarwal, A Verma, P Gera, AK Mohapatra",
//         Journal: "6th International Conference on Contemporary Computing and Informatics",
//         Volume: "6",
//         Issue: "",
//         Pages: "901-905",
//         Year: "2023",
//         Citations: "-"
//     },
//     {
//         Title: "VSMAS2HN: Verifiably Secure Mutual Authentication Scheme for Smart Healthcare Network",
//         Author: "S Batra, B Narwal, AK Mohapatra",
//         Journal: "Advances in Computing and Data Sciences: 7th International Conference",
//         Volume: "150",
//         Issue: "",
//         Pages: "",
//         Year: "2023",
//         Citations: "-"
//     },
//     {
//         Title: "Digital Twin in the Aviation Industry and the Role of Machine Learning: A Review",
//         Author: "P Aggarwal, B Narwal, AK Mohapatra, P Bhati",
//         Journal: "International Conference on ICT for Sustainable Development",
//         Volume: "",
//         Issue: "",
//         Pages: "445-455",
//         Year: "2023",
//         Citations: "-"
//     },
//     {
//         Title: "Using Deep Neural Nets for Flower Classification",
//         Author: "A Verma, I Paul, P Gera, AK Mohapatra",
//         Journal: "14th International Conference on Computing Communication and Networking",
//         Volume: "1",
//         Issue: "",
//         Pages: "1-4",
//         Year: "2023",
//         Citations: "-"
//     },
//     {
//         Title: "Advanced Regression Models for Accurate House Price Prediction: An Analysis of Performance and Interpretability",
//         Author: "A Verma, P Gera, S Singhal, AK Mohapatra",
//         Journal: "14th International Conference on Computing Communication and Networking",
//         Volume: "1",
//         Issue: "",
//         Pages: "1-7",
//         Year: "2023",
//         Citations: "-"
//     },
//     {
//         Title: "Detecting Contradiction and Entailment in Multilingual Text",
//         Author: "A Verma, J Srivastav, P Gera, AK Mohapatra",
//         Journal: "14th International Conference on Computing Communication and Networking",
//         Volume: "1",
//         Issue: "",
//         Pages: "1-5",
//         Year: "2023",
//         Citations: "-"
//     },
//     {
//         Title: "Psychopathy Prediction using Social Media Data",
//         Author: "A Verma, S Agarwal, P Gera, AK Mohapatra",
//         Journal: "14th International Conference on Computing Communication and Networking",
//         Volume: "1",
//         Issue: "",
//         Pages: "1-6",
//         Year: "2023",
//         Citations: "-"
//     },
//     {
//         Title: "Secure XML Parsing Pattern for Prevention of XML Attacks",
//         Author: "C Gupta, RK Singh, AK Mohapatra",
//         Journal: "Information and Communication Technology for Competitive Strategies (ICTCS 2022) Intelligent Strategies for ICT",
//         Volume: "",
//         Issue: "",
//         Pages: "759-770",
//         Year: "2023",
//         Citations: "1"
//     },
//     {
//         Title: "PSECAS: A physical unclonable function based secure authentication scheme for Internet of Drones",
//         Author: "M Sharma, B Narwal, R Anand, AK Mohapatra, R Yadav",
//         Journal: "Computers and Electrical Engineering",
//         Volume: "108",
//         Issue: "",
//         Pages: "108662",
//         Year: "2023",
//         Citations: "2"
//     },
//     {
//         Title: "VSMAS2HN: Verifiably Secure Mutual Authentication Scheme for Smart Healthcare Network",
//         Author: "S Batra, B Narwal, AK Mohapatra",
//         Journal: "International Conference on Advances in Computing and Data Sciences",
//         Volume: "",
//         Issue: "",
//         Pages: "150-160",
//         Year: "2023",
//         Citations: "-"
//     },
//     {
//         Title: "Differential Evolution Image Contrast Enhancement Using Clustering",
//         Author: "S Yadav, Ankita, S Singhal, AK Mohapatra",
//         Journal: "International Conference on Information Technology",
//         Volume: "",
//         Issue: "",
//         Pages: "249-257",
//         Year: "2023",
//         Citations: "-"
//     },
//     {
//         Title: "Review on Facial Recognition System: Past, Present, and Future",
//         Author: "M Shree, A Dev, AK Mohapatra",
//         Journal: "Proceedings of International Conference on Data Science and Applications,ICDSA 2022",
//         Volume: "1",
//         Issue: "",
//         Pages: "807-829",
//         Year: "2023",
//         Citations: "1"
//     },
//     {
//         Title: "Forensic Facial Recognition: Review and Challenges",
//         Author: "I Pattnaik, A Dev, AK Mohapatra",
//         Journal: "Proceedings of International Conference on Data Science and Applications",
//         Volume: "2",
//         Issue: "",
//         Pages: "351-367",
//         Year: "2023",
//         Citations: "-"
//     },
//     {
//         Title: "A novel SVM and LOF-based outlier detection routing algorithm for improving the stability period and overall network lifetime of WSN",
//         Author: "T Sharma, AK Mohapatra, G Tomar",
//         Journal: "International Journal of Nanotechnology",
//         Volume: "20",
//         Issue: "5-10",
//         Pages: "759-789",
//         Year: "2023",
//         Citations: "-"
//     },
//     {
//         Title: "Exposition of E-Healthcare and E-Referral Systems and the role of Machine Learning",
//         Author: "S Batra, B Narwal, AK Mohapatra",
//         Journal: "4th International Conference on Artificial Intelligence and Speech Technology(AIST)",
//         Volume: "",
//         Issue: "",
//         Pages: "1-5",
//         Year: "2022",
//         Citations: "-"
//     },
//     {
//         Title: "An Approach for Verification of Secure Access Control Using Security Pattern",
//         Author: "C Gupta, RK Singh, AK Mohapatra",
//         Journal: "Wireless Communications and Mobile Computing",
//         Volume: "",
//         Issue: "",
//         Pages: "-",
//         Year: "2022",
//         Citations: "-"
//     },
//     {
//         Title: "Multi-factor Authentication by Dynamic Questions in Web Applications",
//         Author: "S Mohanty, S Patnaik, AK Mohapatra",
//         Journal: "Journal of Optoelectronics Laser",
//         Volume: "41",
//         Issue: "(8)",
//         Pages: "157-163",
//         Year: "2022",
//         Citations: "-"
//     },
//     {
//         Title: "GeneMiner: a classification approach for detection of XSS attacks on web services",
//         Author: "C Gupta, RK Singh, AK Mohapatra",
//         Journal: "Computational Intelligence and Neuroscience",
//         Volume: "-",
//         Issue: "-",
//         Pages: "-",
//         Year: "2022",
//         Citations: "8"
//     },
//     {
//         Title: "Fuzzy-based firefly and ACO algorithm for densely deployed WSN",
//         Author: "T Sharma, AK Mohapatra, G Tomar",
//         Journal: "Computer Assisted Methods in Engineering and Science",
//         Volume: "30",
//         Issue: "(2)",
//         Pages: "223-246",
//         Year: "2022",
//         Citations: "1"
//     },
//     {
//         Title: "A comprehensive and critical analysis of TLS 1.3",
//         Author: "N Kumari, AK Mohapatra",
//         Journal: "Journal of Information and Optimization Sciences",
//         Volume: "43",
//         Issue: "(4)",
//         Pages: "689-703",
//         Year: "2022",
//         Citations: "10"
//     },
//     {
//         Title: "A Novel Framework For Multi Source Based Cloud Forensic",
//         Author: "N Kumari, AK Mohapatra",
//         Journal: "2022 6th International Conference on Computing Methodologies and Communication (ICCMC)",
//         Volume: "",
//         Issue: "",
//         Pages: "1-7",
//         Year: "2022",
//         Citations: "2"
//     },
//     {
//         Title: "SDBMND: Secure Density-Based Unsupervised Learning Method with Malicious Node Detection to Improve the Network Lifespan in Densely Deployed WSN",
//         Author: "T Sharma, AK Mohapatra, G Tomar",
//         Journal: "Wireless Communications and Mobile Computing",
//         Volume: "-",
//         Issue: "-",
//         Pages: "-",
//         Year: "2022",
//         Citations: "2"
//     },
//     {
//         Title: "A Hybrid Learning Model to Detect Morphed Images",
//         Author: "N Kumari, AK Mohapatra",
//         Journal: "International journal of computer science and network security: IJCSNS",
//         Volume: "22",
//         Issue: "(6)",
//         Pages: "-",
//         Year: "2022",
//         Citations: "-"
//     },
//     {
//         Title: "University Auto Reply FAQ Chatbot Using NLP and Neural Networks",
//         Author: "H Mangotra, V Dabas, B Khetharpal, A Verma, S Singhal, AK Mohapatra",
//         Journal: "Artificial Intelligence and Applications",
//         Volume: "-",
//         Issue: "-",
//         Pages: "-",
//         Year: "2022",
//         Citations: "-"
//     },
//     {
//         Title: "University Chatbot System using NLP",
//         Author: "A Verma, C Kuntala, P Khatri, S Kaur, AK Mohapatra, S Singhal",
//         Journal: "Sukhmani and Mohapatra, AK and Singhal, Shweta, University Chatbot System …",
//         Volume: "-",
//         Issue: "-",
//         Pages: "-",
//         Year: "2022",
//         Citations: "2"
//     },
//     {
//         Title: "A formal approach for implementing security constraints in security patterns",
//         Author: "C Gupta, RK Singh, AK Mohapatra",
//         Journal: "9th International Conference on Reliability, Infocom Technologies and Optimization (Trends and Future Directions)(ICRITO)",
//         Volume: "-",
//         Issue: "-",
//         Pages: "1-7",
//         Year: "2021",
//         Citations: "3"
//     },
//     {
//         Title: "SAMAKA: Secure and anonymous mutual authentication and key agreement scheme for wireless body area networks",
//         Author: "B Narwal, AK Mohapatra",
//         Journal: "Arabian Journal for Science and Engineering",
//         Volume: "46",
//         Issue: "(9)",
//         Pages: "9197-9219",
//         Year: "2021",
//         Citations: "22"
//     },
//     {
//         Title: "SALMAKA: secured, anonymity preserving and lightweight mutual authentication and key agreement scheme for WBAN",
//         Author: "B Narwal, AK Mohapatra",
//         Journal: "International Journal of Sensors Wireless Communications and Control",
//         Volume: "11",
//         Issue: "(4)",
//         Pages: "-",
//         Year: "2021",
//         Citations: "11"
//     },
//     {
//         Title: "WITHDRAWN: A review of soft computing based cluster-heads selection algorithms in wireless sensor network",
//         Author: "T Sharma, AK Mohapatra, GS Tomar",
//         Journal: "Materials Today: Proceedings",
//         Volume: "-",
//         Issue: "-",
//         Pages: "-",
//         Year: "2021",
//         Citations: "8"
//     },
//     {
//         Title: "An efficient implementation of revocable functionality in authentication protocol for wireless body area network",
//         Author: "R Singh, A Joshi, AK Mohapatra, VN Jha",
//         Journal: "Journal of Information and Optimization Sciences",
//         Volume: "42",
//         Issue: "(2)",
//         Pages: "321-331",
//         Year: "2021",
//         Citations: "4"
//     },
//     {
//         Title: "A survey on security and authentication in wireless body area networks",
//         Author: "B Narwal, AK Mohapatra",
//         Journal: "Journal of Systems Architecture",
//         Volume: "113",
//         Issue: "-",
//         Pages: "101883",
//         Year: "2021",
//         Citations: "75"
//     },
//     {
//         Title: "RC-DBSCAN: redundancy controlled DBSCAN algorithm for densely deployed wireless sensor network to prolong the network lifespan",
//         Author: "T Sharma, AK Mohapatra, GS Tomar",
//         Journal: "International Journal of Computer Applications in Technology",
//         Volume: "66",
//         Issue: "(2)",
//         Pages: "192-208",
//         Year: "2021",
//         Citations: "3"
//     },
//     {
//         Title: "Device Level Authentication Protocol for Wireless Body Area Networks",
//         Author: "A Joshi, AK Mohapatra",
//         Journal: "Proceedings of 3rd International Conference on Computing Informatics and Networks: ICCIN 2020",
//         Volume: "-",
//         Issue: "-",
//         Pages: "145-157",
//         Year: "2021",
//         Citations: "-"
//     },
//     {
//         Title: "Fuzzy-based DBSCAN algorithm to elect master cluster head and enhance the network lifetime and avoid redundancy in wireless sensor network",
//         Author: "T Sharma, A Mohapatra, G Tomar",
//         Journal: "International Conference on Innovative Computing and Communications: Proceedings of ICICC 2020",
//         Volume: "2",
//         Issue: "-",
//         Pages: "1031-1042",
//         Year: "2021",
//         Citations: "3"
//     },
//     {
//         Title: "AEECC-SEP: ant-based energy efficient condensed cluster stable election protocol in wireless sensor network",
//         Author: "T Sharma, A Mohapatra, G Tomar",
//         Journal: "International Conference on Innovative Computing and Communications: Proceedings of ICICC 2020",
//         Volume: "2",
//         Issue: "",
//         Pages: "1125-1138",
//         Year: "2021",
//         Citations: "3"
//     },
//     {
//         Title: "A novel lightweight authentication protocol for body area networks based on elliptic-curve cryptography",
//         Author: "A Joshi, AK Mohapatra",
//         Journal: "Journal of Information and Optimization Sciences",
//         Volume: "41",
//         Issue: "(7)",
//         Pages: "1645-1672",
//         Year: "2020",
//         Citations: "3"
//     },
//     {
//         Title: "DecaDroid classification and characterization of malicious behaviour in android applications",
//         Author: "C Gupta, RK Singh, SK Bhatia, AK Mohapatra",
//         Journal: "International Journal of Information Security and Privacy (IJISP)",
//         Volume: "14",
//         Issue: "(4)",
//         Pages: "57-73",
//         Year: "2020",
//         Citations: "2"
//     },
//     {
//         Title: "SEEMAKA: Secured energy-efficient mutual authentication and key agreement scheme for wireless body area networks",
//         Author: "B Narwal, AK Mohapatra",
//         Journal: "Wireless Personal Communications",
//         Volume: "113",
//         Issue: "(4)",
//         Pages: "1985-2008",
//         Year: "2020",
//         Citations: "29"
//     },
//     {
//         Title: "A survey and classification of XML based attacks on web applications",
//         Author: "C Gupta, RK Singh, AK Mohapatra",
//         Journal: "Information Security Journal: A Global Perspective",
//         Volume: "29",
//         Issue: "(4)",
//         Pages: "183-198",
//         Year: "2020",
//         Citations: "14"
//     },
//     {
//         Title: "Efficient Authentication Protocol for Heterogeneous Wireless Networks",
//         Author: "A Joshi, AK Mohapatra",
//         Journal: "International Conference on Information, Communication and Computing Technology",
//         Volume: "-",
//         Issue: "-",
//         Pages: "135-146",
//         Year: "2020",
//         Citations: "-"
//     },
//     {
//         Title: "Securing web applications using security patterns",
//         Author: "C Gupta, RK Singh, AK Mohapatra",
//         Journal: "ICT for Competitive Strategies",
//         Volume: "-",
//         Issue: "-",
//         Pages: "485-494",
//         Year: "2020",
//         Citations: "3"
//     },
//     {
//         Title: "An energy efficient and load balanced sink mobility for wireless sensor networks",
//         Author: "V Jha, AK Mohapatra, N Prakash",
//         Journal: "International Journal of Information and Communication Technology",
//         Volume: "17",
//         Issue: "(1)",
//         Pages: "65-90",
//         Year: "2020",
//         Citations: "2"
//     },
//     {
//         Title: "Extremely High-Capacity, Secure Image Steganography Based on Composite Edge Detection, with Message Integrity",
//         Author: "P Yadav, AK Mohapatra",
//         Journal: "Communication and Intelligent Systems: Proceedings of ICCIS 2019",
//         Volume: "-",
//         Issue: "-",
//         Pages: "1-20",
//         Year: "2020",
//         Citations: "-"
//     },
//     {
//         Title: "Energy efficient model for recovery from multiple nodes failure in wireless sensor networks",
//         Author: "V Jha, N Prakash, AK Mohapatra",
//         Journal: "Wireless Personal Communications",
//         Volume: "108",
//         Issue: "-",
//         Pages: "1459-1479",
//         Year: "2019",
//         Citations: "10"
//     },
//     {
//         Title: "Analysis of software vulnerability classification based on different technical parameters",
//         Author: "SGRKSAK Mohapatra",
//         Journal: "Information Security Journal: A Global Perspective (Taylor & Francis)",
//         Volume: "-",
//         Issue: "-",
//         Pages: "-",
//         Year: "2019",
//         Citations: "-"
//     },
//     {
//         Title: "Security analysis of wireless authentication protocols",
//         Author: "A Joshi, AK Mohapatra",
//         Journal: "International Journal of Sensors Wireless Communications and Control",
//         Volume: "9",
//         Issue: "(2)",
//         Pages: "-",
//         Year: "2019",
//         Citations: "3"
//     },
//     {
//         Title: "Cyber threat intelligence framework using advanced malware forensics",
//         Author: "YKAK Mohapatra",
//         Journal: "International Journal of Information Technology",
//         Volume: "-",
//         Issue: "-",
//         Pages: "1-10",
//         Year: "2019",
//         Citations: "23*"
//     },
//     {
//         Title: "Analysis of software vulnerability classification based on different technical parameters",
//         Author: "S Garg, RK Singh, AK Mohapatra",
//         Journal: "Information Security Journal: A Global Perspective",
//         Volume: "28",
//         Issue: "(1-2)",
//         Pages: "1-19",
//         Year: "2019",
//         Citations: "17"
//     },
//     {
//         Title: "Authentication protocols for wireless body area network with key management approach",
//         Author: "A Joshi, AK Mohapatra",
//         Journal: "Journal of Discrete Mathematical Sciences and Cryptography",
//         Volume: "22",
//         Issue: "(2)",
//         Pages: "219-240",
//         Year: "2019",
//         Citations: "31"
//     },
//     {
//         Title: "Towards a taxonomy of cyber threats against target applications",
//         Author: "B Narwal, AK Mohapatra, KA Usmani",
//         Journal: "Journal of Statistics and Management Systems",
//         Volume: "22",
//         Issue: "(2)",
//         Pages: "301-325",
//         Year: "2019",
//         Citations: "40"
//     },
//     {
//         Title: "Automated code correction to mitigate SQL injection vulnerabilities",
//         Author: "C Gupta, RK Singh, AK Mohapatra",
//         Journal: "1st International conference on artificial intelligence and speech technology (AIST)",
//         Volume: "-",
//         Issue: "-",
//         Pages: "280-285",
//         Year: "2019",
//         Citations: "1"
//     },
//     {
//         Title: "A review on authentication protocols in wireless body area networks (WBAN)",
//         Author: "B Narwal, AK Mohapatra",
//         Journal: "2018 3rd International Conference on Contemporary Computing and Informatics (IC3I)",
//         Volume: "-",
//         Issue: "-",
//         Pages: "227-232",
//         Year: "2018",
//         Citations: "17"
//     },
//     {
//         Title: "Encrypted web traffic classification",
//         Author: "S Balhwan, N Kumari, AK Mohapatra",
//         Journal: "2018 3rd International Conference on Contemporary Computing and Informatics (IC3I)",
//         Volume: "-",
//         Issue: "-",
//         Pages: "1-6",
//         Year: "2018",
//         Citations: "2"
//     },
//     {
//         Title: "Security Analysis of Wireless Authentication Protocols",
//         Author: "AJAK Mohapatra",
//         Journal: "International Journal of Sensors, Wireless Communications and Control",
//         Volume: "8",
//         Issue: "(3)",
//         Pages: "-",
//         Year: "2018",
//         Citations: "-"
//     },


//     {
//         Title: "Performance analysis of QoS parameters during vertical handover process between Wi-Fi and WiMAX networks",
//         Author: "B Narwal, AK Mohapatra",
//         Journal: "Data Science and Analytics: 4th International Conference on Recent Developments in Science, Engineering and Technology, REDSET 2017, Gurgaon, India, October 13-14, 2017, Revised Selected Papers 4",
//         Volume: "330-344",
//         Year: "2018",
//         Citations: "11"
//     },
//     {
//         Title: "RREQ flood attack and its mitigation in ad hoc network",
//         Author: "S Rani, B Narwal, AK Mohapatra",
//         Journal: "Data Science and Analytics: 4th International Conference on Recent Developments in Science, Engineering and Technology, REDSET 2017, Gurgaon, India, October 13-14, 2017, Revised Selected Papers 4",
//         Volume: "599-607",
//         Year: "2018",
//         Citations: "8"
//     },
//     {
//         Title: "Analysis and detection of ransomware through its delivery methods",
//         Author: "K Gangwar, S Mohanty, AK Mohapatra",
//         Journal: "Data Science and Analytics: 4th International Conference on Recent Developments in Science, Engineering and Technology, REDSET 2017, Gurgaon, India, October 13-14, 2017, Revised Selected Papers 4",
//         Volume: "353-362",
//         Year: "2018",
//         Citations: "16"
//     },
//     {
//         Title: "Survey on Different Techniques of Threshold Cryptography",
//         Author: "R Kaur, P Kashmira, K Meena, AK Mohapatra",
//         Journal: "Journal of Electronics and Communication Engineering (IOSR-JECE)",
//         Volume: "114-119",
//         Year: "2017",
//         Citations: "6"
//     },
//     {
//         Title: "An optimal lightweight cryptographic approach for WSN and its energy consumption analysis",
//         Author: "SS Gaur, AK Mohapatra, B Kochar",
//         Journal: "Int. J. Intell. Eng. Syst",
//         Volume: "59-68",
//         Year: "2017",
//         Citations: "4"
//     },
//     {
//         Title: "An efficient certificateless authentication encryption for WSN based on clustering algorithm",
//         Author: "SS Gaur, AK Mohapatra, R Roges",
//         Journal: "International Journal of Applied Engineering Research",
//         Volume: "12 (14)",
//         Pages: "4184-4190",
//         Year: "2017",
//         Citations: "6"
//     },
//     {
//         Title: "Mitigation of Blackhole attack in MANET",
//         Author: "A Tripathi, AK Mohapatra",
//         Journal: "2016 8th International Conference on Computational Intelligence and Communication Networks (CICN)",
//         Volume: "437-441",
//         Year: "2016",
//         Citations: "9"
//     },
//     {
//         Title: "An insight into digital forensics branches and tools",
//         Author: "N Kumari, AK Mohapatra",
//         Journal: "2016 International Conference on Computational Techniques in Information and Communication Technologies (ICCTICT)",
//         Volume: "243-250",
//         Year: "2016",
//         Citations: "39"
//     },
//     {
//         Title: "A review on the energy efficient vertical handover techniques in heterogeneous wirleless networks",
//         Author: "B Narwal, AK Mohapatra",
//         Journal: "Gitarattan International Business School",
//         Volume: "8 (1)",
//         Pages: "1-12",
//         Year: "2016",
//         Citations: "-"
//     },
//     {
//         Title: "Energy efficient vertical handover algorithm for heterogeneous wireless networks",
//         Author: "B Narwal, A Mohapatra",
//         Journal: "International Journal of Control Theory and Applications",
//         Volume: "9 (19)",
//         Pages: "9221-9225",
//         Year: "2016",
//         Citations: "10"
//     },
//     {
//         Title: "Secret key generation using OFDM samples",
//         Author: "S Kakkar, IS Makkar, AK Mohapatra",
//         Journal: "Journal of Discrete Mathematical Sciences and Cryptography",
//         Volume: "18 (4)",
//         Pages: "439-454",
//         Year: "2015",
//         Citations: "7"
//     },
//     {
//         Title: "An insight into the security issues and their solutions for android phones",
//         Author: "A Khandelwal, AK Mohapatra",
//         Journal: "2015 2nd International Conference on Computing for Sustainable Global Development (INDIACom)",
//         Volume: "106-109",
//         Year: "2015",
//         Citations: "21"
//     },
//     {
//         Title: "Digital image authentication model based on edge adaptive steganography",
//         Author: "N Grover, AK Mohapatra",
//         Journal: "2013 2nd International Conference on Advanced Computing, Networking and Security",
//         Volume: "238-242",
//         Year: "2013",
//         Citations: "38"
//     },
//     {
//         Title: "An improved framework for incident handling",
//         Author: "K Usmani, AK Mohapatra, N Prakash",
//         Journal: "Information Security Journal: A Global Perspective",
//         Volume: "22 (1)",
//         Pages: "1-9",
//         Year: "2013",
//         Citations: "5"
//     },
//     {
//         Title: "Light weight encryption technique for group communication in cloud computing environment",
//         Author: "DC Verma, AK Mohapatra, K Usmani",
//         Journal: "International Journal of Computer Applications",
//         Volume: "49 (8)",
//         Year: "2012",
//         Citations: "7"
//     },
//     {
//         Title: "Wired equivalent privacy reinvestigated",
//         Author: "AK Mohapatra, N Prakash",
//         Journal: "Journal of Discrete Mathematical Sciences and Cryptography",
//         Volume: "13 (2)",
//         Pages: "141-151",
//         Year: "2010",
//         Citations: "2"
//     },
//     {
//         Title: "A generalized formula to determine Pythagorean triples",
//         Author: "AK Mohapatra, N Prakash",
//         Journal: "International Journal of Mathematical Education in Science and Technology",
//         Volume: "41 (1)",
//         Pages: "131-135",
//         Year: "2010",
//         Citations: "2"
//     },
//     {
//         Title: "Secured biometric template",
//         Author: "AK Mohapatra, N Prakash, S Aggarwal",
//         Journal: "2008 16th IEEE International Conference on Networks",
//         Volume: "1-4",
//         Year: "2008",
//         Citations: "2"
//     },
//     {
//         Title: "Performance Analysis of two level single chain pointer forwarding strategy for location management",
//         Author: "N Prakash, AK Mohapatra",
//         Journal: "2005 IEEE International Conference on Personal Wireless Communications, 2005. ICPWC 2005.",
//         Volume: "394-398",
//         Year: "2005",
//         Citations: "4"
//     }










//     // Add more data here
// ];

// // Call the function to insert table data
// insertTableData(data);


// scriptResearch.js


// scriptResearch.js

document.addEventListener('DOMContentLoaded', fetchResearchPapers);

async function fetchResearchPapers() {
    try {
        const response = await fetch('https://dr-ak-mohapatra-portfolio-backend.vercel.app/api/research', {
            headers: {
                'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFrbW9oYXBhdHJhIiwiaWF0IjoxNzIwOTQ2NzkyLCJleHAiOjM2MTQ0MDI3OTJ9.n5pwQaoyjtyXcUGhOS_-o3maR0dLKWXF5mSXJoOxxXc"
            }
        });
        const data = await response.json();
        const tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';
        data.forEach(paper => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${paper.title}</td>
                <td>${paper.authors}</td>
                <td>${paper.journal}</td>
                <td>${paper.volume}</td>
                <td>${paper.year}</td>
                <td>${paper.citations}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching research papers:', error);
    }
}

function searchTable() {
    const input = document.getElementById('searchBox');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('myTable');
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        let display = false;
        const td = tr[i].getElementsByTagName('td');
        for (let j = 0; j < td.length; j++) {
            if (td[j].innerText.toLowerCase().indexOf(filter) > -1) {
                display = true;
            }
        }
        tr[i].style.display = display ? '' : 'none';
    }
}
