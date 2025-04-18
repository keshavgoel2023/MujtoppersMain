import CardWithSelect from "@/components/CardSelectComponent";

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ branch: string; yearBranch: string }>;
}) {
  const { branch, yearBranch } = await params;

  const subjectsYearWise: Record<
    string,
    Record<
      string,
      {
        name: string;
        image: string;
        pyqLink: string;
        notesLink: string;
        playlistLink: string;
        roadmap: string;
      }[]
    >
  > = {
    PhysicsCycle: {
      first: [
        {
          name: "Engineering Materials & Mechanics",
          image: "/EMM.png",
          pyqLink:
            "https://drive.google.com/drive/u/0/folders/1w54A2Vd87DQtFwEoUuy8m0nX9rANb4RA",
          notesLink:
            "https://drive.google.com/drive/u/0/folders/1nxBvjZVxG2QL4W_B8skkg4z-VYibmF7n",
          playlistLink:
            "https://youtube.com/playlist?list=PLB_MQaW6RcutYOUEk_7Je8K-Z3ixz_4TS&si=lrOP6_OjoMmUWZR3",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887269/RoadMaps/lbx5d6voz4tthryaqhmv.png",
        },
        {
          name: "Biology For Engineers",
          image: "/Biology.png",
          pyqLink:
            "https://drive.google.com/drive/u/0/folders/1kNkblB1RDznXNJmehDohPTvMGckCHAfY",
          notesLink:
            "https://drive.google.com/drive/folders/178MPsfJrZA6TSfvdAbdpcjww1KFAeXiL",
          playlistLink:
            "https://youtube.com/playlist?list=PLB_MQaW6RcuukNazriXq2TZYTyq8D_5uR&si=miKXCJcM_Ao8uesi",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887269/RoadMaps/o4vwis57ft48pox5if44.png",
        },
        {
          name: "Engineering Physics",
          image: "/Physics.png",
          pyqLink:
            "https://drive.google.com/drive/u/0/folders/1cdiHPynlmRHmneEPs7P6EV1DB7wzQGsh",
          notesLink:
            "https://drive.google.com/drive/u/0/folders/17txyc5ZmKvQepWdVK1TCnJQgxaoou6Ke",
          playlistLink:
            "https://youtube.com/playlist?list=PLuAADu3OvBt495Awir13ZNM-gv5IwLGQy&si=1BSh9BoCqXFGAWei",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887268/RoadMaps/z18vg5vuoqvpp06tqeio.png",
        },
        {
          name: "Computational Mathematics",
          image: "/C&M.png",
          pyqLink:
            "https://drive.google.com/drive/u/0/folders/1wE3l2pM-frCwyFS8DaRIW13-XCbmnAmv",
          notesLink:
            "https://drive.google.com/drive/u/0/folders/17PMTzl-T1TOhnpWUxlVwIkY7OGhDM7TO",
          playlistLink:
            "https://youtube.com/playlist?list=PLDh_nHdEw3KPPjngTAmQgcYY8zBA6kkX8&feature=shared",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887267/RoadMaps/ubzhdxxlucajxgatioal.png",
        },
        {
          name: "MATLAB",
          image: "/MATLAB.png",
          pyqLink:
            "https://drive.google.com/drive/u/0/folders/1d75bxh_L7JvAKNheNZ3c6YOeqikO1CTB",
          notesLink:
            "https://drive.google.com/drive/u/0/folders/1VVt2FfnbjhGTebrL7ditH--K_BfWMJZa",
          playlistLink:
            "https://youtube.com/playlist?list=PLB_MQaW6Rcut-VLlP29zTzka8hs24bqJ9&si=K7xlUK78s8e2TC3V",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887267/RoadMaps/rvhpz7ufrtmeyawulyxt.png",
        },
      ],
    },
    ChemistryCycle: {
      first: [
        {
          name: "Calculus & Matrices",
          image: "/Calculus&Matrices.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1Pr_H4-fb_80Jo6Du96qIIpa6FIVEDTNm",
          notesLink:
            "https://drive.google.com/drive/folders/1sC2cCnpEBGosunT4snNZf2Y8pUj5-uqV",
          playlistLink:
            "https://www.youtube.com/watch?v=p5rBJj5CKCg&list=PLU6SqdYcYsfLPxjd-k-MaoG7qgRQ-2fKc",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887267/RoadMaps/ongrvhynp6lryhvrsua5.png",
        },
        {
          name: "Electrical & Electronics System",
          image: "/Electrical&ElectronicsSystem.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1T2KhOCchylff1UyLZ2jyipmGmHtDx1Sd",
          notesLink:
            "https://drive.google.com/drive/folders/1JnVhkK5vg93hTzYq11Cr7NE8seneqdU1",
          playlistLink:
            "https://www.youtube.com/watch?v=Vd2UJiIPbag&list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887269/RoadMaps/bybkj1x0juxncpvtij3m.png",
        },
        {
          name: "Engineering Chemistry",
          image: "/Chemistry.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1pP4zpZHNyD9Zp1peFPRYePpMXvwEWZCV",
          notesLink:
            "https://drive.google.com/drive/folders/1hER7WzvapxKzG4i3pIayLRU3ICTYwjSF",
          playlistLink:
            "https://www.youtube.com/watch?v=XCZakSI-M0I&list=PLLf6O8XdGj03gLo6znlqJbMzgIgt8tSU1",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887268/RoadMaps/oyi0gutsftteevvthtl3.png",
        },
        {
          name: "Problem Solving using Computers",
          image: "/PSUC.png",
          pyqLink:
            "https://drive.google.com/drive/folders/14E0SRP4X0EbccxY9jMo44E7_zlUEARJb",
          notesLink:
            "https://drive.google.com/drive/folders/1nj16NcCCIgI3kmmkT-eisrKg_BKN2yKA",
          playlistLink:
            "https://www.youtube.com/watch?v=aZb0iu4uGwA&t=8493s&pp=ygUdYyBsYW5ndWFnZSBmb3IgYnRlY2ggMXN0IHllYXI%3D",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887267/RoadMaps/jkguajp0hhuepbv0mnps.png",
        },
        {
          name: "Technical Writing using Computers",
          image: "/TWC.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1Ka7AT18HKHu_WjIBSoloGI_9VHm-ar5t",
          notesLink:
            "https://drive.google.com/drive/folders/1y-t8alIoH2J7w_f1vBWYTWKcYkpHAIDV",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
    IT: {
      second: [
        {
          name: "Economics",
          image:
            "https://drive.google.com/uc?export=view&id=1JEmwtAb4rs_4wUv8dkZWay0WmHPLtDRw",
          pyqLink:
            "https://drive.google.com/drive/folders/1NTLC89Ma4eU6yJSyD9dGymJSoXDYuobo",
          notesLink:
            "https://drive.google.com/drive/folders/1MIviTRv8LkpB0WLz-XmBeLchMY3XxBtE",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU22KHAUmDwQ_qWCSPav_G14Z&si=9YwhhHh88ZC_ayN9",
          roadmap: "",
        },
        {
          name: "Statistics & Probability",
          image: "https://drive.google.com/uc?export=view&id=1GfaaHfQckN-VwJr1LPFCyKzgah9T-BVQ",
          pyqLink: "https://drive.google.com/drive/folders/1vZPXAJwd7K2ApdvADnwA_lhsV43OyptC",
          notesLink: "https://drive.google.com/drive/folders/1jMrTLdLlR_UPfjZBKBllpo6fajmAFjr9",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU20mH6OYmZ4DU0wtH8z8nKFa&si=dM9Toupt80RBsDOP",
          roadmap: "",
        },
        {
          name: "Data Communication",
          image: "https://drive.google.com/uc?export=view&id=1hRgn8Xxk1IFIjULySimcNPV7vCRS29RQ",
          pyqLink: "https://drive.google.com/drive/folders/1Q1BE5wr50TUNoOwyxVY8219tVtETQV0y",
          notesLink:
            "https://drive.google.com/drive/folders/1zN95UHvxH31eqNOguKs_x90uvkpf8SX4",
          playlistLink: "https://youtube.com/playlist?list=PLrjkTql3jnm9xaVXzOGH5Z_xvvBguUSat&si=ViHHBjtAZUf7hYSR",
          roadmap: "",
        },
        {
          name: "Computer System Architecture",
          image: "https://drive.google.com/uc?export=view&id=1e76rXlmOE_IKHwDV09ByVxl98pk0ti0q",
          pyqLink:
            "https://drive.google.com/drive/folders/11NekAzIeiLGry2Am0m5qfuEUtEYgtCRR",
          notesLink:
            "https://drive.google.com/drive/folders/10wjhn9aGixqaIa2BQGGZ-yOAEqcTZKHq",
          playlistLink: "https://youtu.be/DsK35f8wyUw?si=aEQyCkYhVlPywhka",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image: "https://drive.google.com/uc?export=view&id=1yMhFJ89A8zgYw0d8UjOfjfC0APLI9uj0",
          pyqLink:
            "https://drive.google.com/drive/folders/16MvJzoUA1CyivRESx9_4sMbREdIq1WXt",
          notesLink:
            "https://drive.google.com/drive/folders/1RwavgM2xKSw0sD_d-kn8IOOODB1UpKuX",
          playlistLink: "https://youtube.com/playlist?list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&si=F-0hNBoIf8qkYMPA",
          roadmap: "",
        },
        {
          name: "Python Programming Fundamentals",
          image: "https://drive.google.com/uc?export=view&id=1ln75TGSJuPmmJXcdcN4XPAc0O5bUF4-j",
          pyqLink: "https://drive.google.com/drive/folders/1FvpViDiDzYpMOXFjndtWl4H8JsitzkZn",
          notesLink: "https://drive.google.com/drive/folders/15fxrBDM0CuvMzPa__-Csln-quVsxUvLh",
          playlistLink: "https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=WAD-IymtA0OJpgIJ",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image: "https://drive.google.com/uc?export=view&id=11R_xYDTm_hSxR39NA7huSwZYF1gJvJ_9",
          pyqLink: "https://drive.google.com/drive/folders/14hlQxQdNilqy6K3TXzXq1uz7Mud9jT2g",
          notesLink:
            "https://drive.google.com/drive/folders/1Uvg_5I8O_qEy8a9viTl-mXXRLxE9RkEB",
          playlistLink: "https://www.youtube.com/watch?v=3obEP8eLsCw&t=35487s",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image: "https://drive.google.com/uc?export=view&id=107WzF5EAgm68hSr_HycHB2XctuaPpFhW",
          pyqLink:
            "https://drive.google.com/drive/folders/1LDmfiAajgHOsTUq8_xKqDAqGDcJY-0ov",
          notesLink:
            "https://drive.google.com/drive/folders/1jk_FY3TwT63OUbNOI1tmucZvp4CvQtDZ",
          playlistLink: "https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=V8GTDj7xybd_D5b2",
          roadmap: "",
        },
        {
          name: "Web Technologies",
          image: "https://drive.google.com/uc?export=view&id=14XpYyVFh79y8OWG2KC0ziBu5XUGLgJce",
          pyqLink: "https://drive.google.com/drive/folders/1tviFmvyke62MyBjrlhcH2IGP1GTbEXp8",
          notesLink:
            "https://drive.google.com/drive/folders/1fz3nzYRiFbXVceq-8GUrfP2hHL9vm_dI",
          playlistLink: "https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n&si=DdiAPPaTivOx16SM",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "https://drive.google.com/uc?export=view&id=19a7qJ30A0WYJW1-tla7nknMNkzOTh5fO",
          pyqLink:
            "https://drive.google.com/drive/folders/1fTlbkE4JHBuJniK8GK0npv5AYaEtRvK3",
          notesLink:
            "https://drive.google.com/drive/folders/1XlZbicmJD80dPDwCGnINvMDlsnxNUcrA",
          playlistLink: "https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&feature=shared",
          roadmap: "",
        },
        {
          name: "Management of Technology",
          image: "https://drive.google.com/uc?export=view&id=1syTHiSXLp-L5CkfgHMiTQPi02tAO7cdF",
          pyqLink:
            "https://drive.google.com/drive/folders/1cTALhsY_zFL883HTrRJBOhx671LO2jmb",
          notesLink: "https://drive.google.com/drive/folders/1MIviTRv8LkpB0WLz-XmBeLchMY3XxBtE",
          playlistLink: "",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "Foundation of Data Science",
          image: "/3_IT/FDS.png",
          pyqLink: "https://drive.google.com/drive/folders/1PrIucd4gtsNaTNKBdU6J5KcrTgxASCio",
          notesLink: "https://drive.google.com/drive/folders/1g8wLoBupfl2KdSSYuAmf1eToQJm5Ukt1",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Software Engineering",
          image: "/3_IT/SE.png",
          pyqLink: "https://drive.google.com/drive/folders/1jzqaXTv75hX_BrBy2tnS8lFoI6GQr7h1",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Design and Analysis of Algorithms",
          image: "/3_CCE/DAA.png",
          pyqLink: "https://drive.google.com/drive/folders/1E_WJSuhC628od_vEIB3zH-4-fTxqJruS",
          notesLink: "https://drive.google.com/drive/folders/1bz8PDtXLKbY0mYtbZLFWC-kx0CxGifpr",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image: "/3_IT/CN.png",
          pyqLink: "https://drive.google.com/drive/folders/1NVbTT_qmguxOASC6hLdClvpVx0yujONv",
          notesLink: "https://drive.google.com/drive/folders/1Mm_wPEiV-BqDFRyMu4QNuuBJgZ2DtkLA",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Artificial Intelligence and Machine Learning",
          image: "/3_IT/AI_ML.png",
          pyqLink: "https://drive.google.com/drive/folders/1oe4JzD_y_Iylz0EbkzW3UFCPOWHsielN",
          notesLink: "https://drive.google.com/drive/folders/186JTWqITq4A3losWMRdc2mtM9QNxdOo5",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Automata & Compiler Design",
          image: "/3_IT/ACD.png",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1w9HQdLofig_rM3zWnCgY9xlFZtQofucC",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "CIS",
          image: "/3_IT/CIS.png",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1S4rZu_oRw-Bt6KNiRzrl_pIPvjdytl_9",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },

    CSE: {
      second: [
        {
          name: "Economics",
          image: "https://drive.google.com/uc?export=view&id=1JEmwtAb4rs_4wUv8dkZWay0WmHPLtDRw",
          pyqLink:
            "https://drive.google.com/drive/folders/1kKgdwQ89xpnIqFrbByKshn8Vip_go4eP",
          notesLink:
            "https://drive.google.com/drive/folders/1MIviTRv8LkpB0WLz-XmBeLchMY3XxBtE",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU22KHAUmDwQ_qWCSPav_G14Z&si=9YwhhHh88ZC_ayN9",
          roadmap: "",
        },
        {
          name: "Statistics & Probability",
          image: "https://drive.google.com/uc?export=view&id=1GfaaHfQckN-VwJr1LPFCyKzgah9T-BVQ",
          pyqLink: "https://drive.google.com/drive/folders/1nWO2ZZrpitIAZxO3qgfBlrQA3i3Z03FF",
          notesLink: "https://drive.google.com/drive/folders/1jMrTLdLlR_UPfjZBKBllpo6fajmAFjr9",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU20mH6OYmZ4DU0wtH8z8nKFa&si=dM9Toupt80RBsDOP",
          roadmap: "",
        },
        {
          name: "Design & Analysis of Algorithms",
          image: "https://drive.google.com/uc?export=view&id=1_zFuTffVpiHR3e4e9E2HLA1Xj2P3kWaE",
          pyqLink: "https://drive.google.com/drive/folders/1ffgA8RffUbY8VmSa4TMkcVtXMhwqU9VU",
          notesLink: "http://drive.google.com/drive/folders/187KV-bondddfwbTRSSFItzWwV0kpZJuf",
          playlistLink: "https://youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&feature=shared",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "https://drive.google.com/uc?export=view&id=19a7qJ30A0WYJW1-tla7nknMNkzOTh5fO",
          pyqLink: "https://drive.google.com/drive/folders/1lIiSdvmFYj7D2w-zcQwOI7tB-hHYlCAU",
          notesLink: "https://drive.google.com/drive/folders/1XlZbicmJD80dPDwCGnINvMDlsnxNUcrA",
          playlistLink: "https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&feature=shared",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image: "https://drive.google.com/uc?export=view&id=11R_xYDTm_hSxR39NA7huSwZYF1gJvJ_9",
          pyqLink: "https://drive.google.com/drive/folders/1gggoJjbAVzQkPW-BNP8NBeCnp00EY-lN",
          notesLink: "https://drive.google.com/drive/folders/1Uvg_5I8O_qEy8a9viTl-mXXRLxE9RkEB",
          playlistLink: "https://www.youtube.com/watch?v=3obEP8eLsCw&t=35487s",
          roadmap: "",
        },
        {
          name: "RDBMS",
          image: "https://drive.google.com/uc?export=view&id=107WzF5EAgm68hSr_HycHB2XctuaPpFhW",
          pyqLink: "https://drive.google.com/drive/folders/1VEZE6kbEXQSTxqFFZ76DljXxZJk78oCf",
          notesLink: "https://drive.google.com/drive/folders/1jk_FY3TwT63OUbNOI1tmucZvp4CvQtDZ",
          playlistLink: "https://www.youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV",
          roadmap: "",
        },
        {
          name: "Computer Organization and Architecture",
          image: "https://drive.google.com/uc?export=view&id=1NDmq2few7tqIjZQP9bpwYTJeD-a_BDve",
          pyqLink: "https://drive.google.com/drive/folders/1Rz9fB5QEbMz2_jCbapalm8AKAMvYjvx5",
          notesLink: "https://drive.google.com/drive/folders/1EV_QwyogySTsELn9FY2M3VUzSzTy7eK6",
          playlistLink: "https://www.youtube.com/playlist?list=PLgwJf8NK-2e7XZXcFujMw--IDZ2nnsXNT",
          roadmap: "",
        },
        {
          name: "Cryptography",
          image: "https://drive.google.com/uc?export=view&id=16pCF7QcjMTGWcwAmW8nZwLo4e5eydV7a",
          notesLink:
            "https://drive.google.com/drive/folders/1HBeISehoI9nR6HTIu5YHuJe0cueRUCh0",
          playlistLink: "https://www.youtube.com/playlist?list=PL9FuOtXibFjV77w2eyil4Xzp8eooqsPp8",
          roadmap: "",
          pyqLink:
            "https://drive.google.com/drive/folders/1GhfJBD036iUIJBaFPo6JRdy8_n22d2fx",
        },
        {
          name: "ACD",
          image: "https://drive.google.com/uc?export=view&id=10jatMHYKtSGdlKcM7FjULzcSytg0oElj",
          pyqLink: "https://drive.google.com/drive/folders/1Sxocdt8c71BfwJeDJbnz2ABt5FOHLQg2",
          notesLink: "https://drive.google.com/drive/folders/1w9HQdLofig_rM3zWnCgY9xlFZtQofucC",
          playlistLink: "https://www.youtube.com/playlist?list=PLmXKhU9FNesSdCsn6YQqu9DmXRMsYdZ2T",
          roadmap: "",
        },
        {
          name: "Management of Technology",
          image: "https://drive.google.com/uc?export=view&id=1syTHiSXLp-L5CkfgHMiTQPi02tAO7cdF",
          pyqLink: "https://drive.google.com/drive/folders/1o_RQnX3eAGIA14-JiRsiqcnxpBWXI5ee",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "CSA",
          image: "https://drive.google.com/uc?export=view&id=1e76rXlmOE_IKHwDV09ByVxl98pk0ti0q",
          pyqLink:
            "https://drive.google.com/drive/folders/1Rz9fB5QEbMz2_jCbapalm8AKAMvYjvx5",
          notesLink:
            "https://drive.google.com/drive/folders/1EV_QwyogySTsELn9FY2M3VUzSzTy7eK6",
          playlistLink: "https://youtu.be/DsK35f8wyUw?si=aEQyCkYhVlPywhka",
          roadmap: "",
        },
        {
          name: "OOP",
          image: "https://drive.google.com/uc?export=view&id=1yMhFJ89A8zgYw0d8UjOfjfC0APLI9uj0",
          pyqLink:
            "https://drive.google.com/drive/folders/1BrbJkAWIKlss0Azby6z3W7QKVMMI-D3R",
          notesLink:
            "https://drive.google.com/drive/folders/1b_e32HdEpIxHPFv26rHVzfbHZZNSSAD-",
          playlistLink: "https://www.youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "AISC",
          image: "/3_CSE/AISC.png",
          pyqLink: "https://drive.google.com/drive/folders/1im02vRTo0uXT180Pguu7Hu8mkmO0XVa6",
          notesLink: "https://drive.google.com/drive/folders/1zU470hOIIIGRx1u3WhPB370AHIsqJzSt",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Design & Analysis of Algorithms",
          image: "/3_CSE/DAA.png",
          pyqLink: "https://drive.google.com/drive/folders/1-2qokPmfLDs2tvbEB6e2k2sUb7GRXk9d",
          notesLink: "https://drive.google.com/drive/folders/1bz8PDtXLKbY0mYtbZLFWC-kx0CxGifpr",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Automata & Compiler Design",
          image: "/3_CSE/ACD.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1nDlLF44yvaJ6_Gf1ZQeSE6sO3k-YBUd3",
          notesLink:
            "https://drive.google.com/drive/folders/1w9HQdLofig_rM3zWnCgY9xlFZtQofucC",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image: "/3_CSE/CN.png",
          pyqLink: "https://drive.google.com/drive/folders/1npItudoofzWfIo-XnDyGEe2IC1qw-fF7",
          notesLink: "https://drive.google.com/drive/folders/1Mm_wPEiV-BqDFRyMu4QNuuBJgZ2DtkLA",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Software Engineering",
          image: "/3_CSE/SE.png",
          pyqLink: "https://drive.google.com/drive/folders/19eu_8cShgL90QmT7VprO03r1tE911pBj",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "ISS",
          image: "/3_CSE/ISS.png",
          pyqLink: "https://drive.google.com/drive/folders/11lhy9hIC0Vcxa3mSvsHydvuTmn7m1bGM",
          notesLink: "https://drive.google.com/drive/folders/1ND8pHgOUOVSfHow38ytP6LvEvRisYdz3",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Science & ML",
          image: "/3_CSE/DS&ML.png",
          pyqLink: "https://drive.google.com/drive/folders/10Wwm_K-yeBv5IAeBVg8-6W4reho90w1s",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
    CCE: {
      second: [
        {
          name: "Economics",
          image: "https://drive.google.com/uc?export=view&id=1JEmwtAb4rs_4wUv8dkZWay0WmHPLtDRw",
          pyqLink: "https://drive.google.com/drive/folders/1Toe49CDQBseML7mU0F-p64b8cZoBOKpY",
          notesLink:
            "https://drive.google.com/drive/folders/1MIviTRv8LkpB0WLz-XmBeLchMY3XxBtE",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU22KHAUmDwQ_qWCSPav_G14Z&si=9YwhhHh88ZC_ayN9",
          roadmap: "",
        },
        {
          name: "Statistics & Probability",
          image: "https://drive.google.com/uc?export=view&id=1GfaaHfQckN-VwJr1LPFCyKzgah9T-BVQ",
          pyqLink: "https://drive.google.com/drive/folders/1a9BhYz5xvqqjBv_gataPm3tae025uT3f",
          notesLink: "https://drive.google.com/drive/folders/1jMrTLdLlR_UPfjZBKBllpo6fajmAFjr9",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU20mH6OYmZ4DU0wtH8z8nKFa&si=dM9Toupt80RBsDOP",
          roadmap: "",
        },
        {
          name: "Data Communication",
          image:
            "https://drive.google.com/uc?export=view&id=1hRgn8Xxk1IFIjULySimcNPV7vCRS29RQ",
          pyqLink: "",
          notesLink:
            "https://drive.google.com/drive/folders/1zN95UHvxH31eqNOguKs_x90uvkpf8SX4",
          playlistLink: "https://youtube.com/playlist?list=PLrjkTql3jnm9xaVXzOGH5Z_xvvBguUSat&si=ViHHBjtAZUf7hYSR",
          roadmap: "",
        },
        {
          name: "Digital Design and Computer Architecture",
          image: "https://drive.google.com/uc?export=view&id=19SJqK70KSNErfSgX0ACjL5DG7KGNav3q",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image: "https://drive.google.com/uc?export=view&id=1yMhFJ89A8zgYw0d8UjOfjfC0APLI9uj0",
          pyqLink: "https://drive.google.com/drive/folders/15igdh33pd0Ii7ZBAl1V_yT6wERNCTn-d",
          notesLink:
            "https://drive.google.com/drive/folders/1b_e32HdEpIxHPFv26rHVzfbHZZNSSAD-",
          playlistLink: "https://www.youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image: "https://drive.google.com/uc?export=view&id=11R_xYDTm_hSxR39NA7huSwZYF1gJvJ_9",
          pyqLink: "https://drive.google.com/drive/folders/1ziHBNfrJ1155bG6k5PdK9RSaQJ1BEZXh",
          notesLink:
            "https://drive.google.com/drive/folders/1Uvg_5I8O_qEy8a9viTl-mXXRLxE9RkEB",
          playlistLink: "https://www.youtube.com/watch?v=3obEP8eLsCw&t=35487s",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image: "https://drive.google.com/uc?export=view&id=107WzF5EAgm68hSr_HycHB2XctuaPpFhW",
          pyqLink: "https://drive.google.com/drive/folders/1-j_wC0Yr-iuAGISOuDslMOYUrWlqiZPa",
          notesLink:
            "https://drive.google.com/drive/folders/1jk_FY3TwT63OUbNOI1tmucZvp4CvQtDZ",
          playlistLink: "https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=V8GTDj7xybd_D5b2",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image: "https://drive.google.com/uc?export=view&id=18kippQ9qVzI61j6CuDMySmL3GFneFWZ9",
          pyqLink: "https://drive.google.com/drive/folders/1_YUkRcdWCclDdg4vJFMe9Pm_Zb1zCkag",
          notesLink: "https://drive.google.com/drive/folders/1nMZ3yYzp9rYiGDb0f3lqL0jqqz-dNtg0",
          playlistLink: "https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=e3p8n480ABME9G8d",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "https://drive.google.com/uc?export=view&id=19a7qJ30A0WYJW1-tla7nknMNkzOTh5fO",
          pyqLink: "https://drive.google.com/drive/folders/1h9xstZEW8k-6My9DyKVE05D49xkm__X9",
          notesLink: "https://drive.google.com/drive/folders/1XlZbicmJD80dPDwCGnINvMDlsnxNUcrA",
          playlistLink: "https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&feature=shared",
          roadmap: "",
        },
        {
          name: "Management and Organizational Theory",
          image: "https://drive.google.com/uc?export=view&id=1syTHiSXLp-L5CkfgHMiTQPi02tAO7cdF",
          pyqLink: "https://drive.google.com/drive/folders/1UJblblj9dCg6GMKO5-CZh7rpupZ4xyrt",
          notesLink:
            "",
          playlistLink: "",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "Foundation of Data Science",
          image: "/3_CCE/FDS.png",
          pyqLink: "https://drive.google.com/drive/folders/1xddaS8pXxUVaCmRuYfcII2dp8NlexkwRhttps://drive.google.com/drive/folders/1x_5CR-Z12iasyk2InCKzDpq-kkxCroi2",
          notesLink: "https://drive.google.com/drive/folders/1g8wLoBupfl2KdSSYuAmf1eToQJm5Ukt1",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Software Engineering",
          image: "/3_CCE/SE.png",
          pyqLink: "https://drive.google.com/drive/folders/1cOnLh-gi2kVRGp25tXQk7JcfDmr2yoEv",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Design and Analysis of Algorithms",
          image: "/3_CCE/DAA.png",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1bz8PDtXLKbY0mYtbZLFWC-kx0CxGifpr",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Automata and Compiler Design",
          image: "/3_CCE/ACD.png",
          pyqLink: "https://drive.google.com/drive/folders/1oKqE8f1UMKN3KpXgDZ2kCXBie2PdH_4o",
          roadmap: "",
          notesLink: "https://drive.google.com/drive/folders/1w9HQdLofig_rM3zWnCgY9xlFZtQofucC",
          playlistLink: "",
        },
        {
          name: "Wirless Communication",
          image: "/3_CCE/WC.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Aritificial Intelligence & Machine Learning",
          image: "/3_CCE/AL_ML.png",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/186JTWqITq4A3losWMRdc2mtM9QNxdOo5",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
    AIML: {
      second: [
        {
          name: "Design and Analysis of Algorithms",
          image: "https://drive.google.com/uc?export=view&id=1_zFuTffVpiHR3e4e9E2HLA1Xj2P3kWaE",
          pyqLink:
            "https://drive.google.com/drive/folders/12XTPn-zlRQTVsm1qr_Ldouzz8K-7etkX",
          notesLink:
            "https://drive.google.com/drive/folders/187KV-bondddfwbTRSSFItzWwV0kpZJuf",
          playlistLink: "https://youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&feature=shared",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image: "https://drive.google.com/uc?export=view&id=11R_xYDTm_hSxR39NA7huSwZYF1gJvJ_9",
          pyqLink:
            "https://drive.google.com/drive/folders/1do4sEQSQj6J1-7u41mfcR2fpgV3TaGCf",
          notesLink:
            "https://drive.google.com/drive/folders/1Uvg_5I8O_qEy8a9viTl-mXXRLxE9RkEB",
          playlistLink: "https://youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&feature=shared",
          roadmap: "",
        },
        {
          name: "Agile Software Development",
          image: "https://drive.google.com/uc?export=view&id=1cAgk_G_Yvx3nb5gzgswSOgQM3P_gN-HU",
          pyqLink:
            "https://drive.google.com/drive/folders/1f8RLDUOrvM_UvJXxB3OBFKv1cRTI8g-G",
          notesLink:
            "https://drive.google.com/drive/folders/1I8iTLlUGsFOHupmEG0wYw2f_aN_KQy1J",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Cloud Computing",
          image: "https://drive.google.com/uc?export=view&id=1GqsOXOnDFcz0-H4_EjUiPthZx8ApIRM0",
          pyqLink:
            "https://drive.google.com/drive/folders/1NNK82Zs2_FJtDTP0OLVzuFMhuGWiRIQX",
          notesLink:
            "https://drive.google.com/drive/folders/1TdrgiDukGedsPSjYRxMSwQsZOsamh9dC",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Statistics and Probability",
          image: "https://drive.google.com/uc?export=view&id=1GfaaHfQckN-VwJr1LPFCyKzgah9T-BVQ",
          pyqLink:
            "https://drive.google.com/drive/folders/1x1swB_m4TRA8caHbYFyMaiO05s4588nD",
          notesLink:
            "https://drive.google.com/drive/folders/1jMrTLdLlR_UPfjZBKBllpo6fajmAFjr9",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU20mH6OYmZ4DU0wtH8z8nKFa&si=dM9Toupt80RBsDOP",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "https://drive.google.com/uc?export=view&id=19a7qJ30A0WYJW1-tla7nknMNkzOTh5fO",
          pyqLink:
            "https://drive.google.com/drive/folders/1dor9PUWEgRIHD7PRqOJT3m1o4JFhFpiW",
          notesLink:
            "https://drive.google.com/drive/folders/1XlZbicmJD80dPDwCGnINvMDlsnxNUcrA",
          playlistLink: "https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&feature=shared",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image: "https://drive.google.com/uc?export=view&id=107WzF5EAgm68hSr_HycHB2XctuaPpFhW",
          pyqLink:
            "https://drive.google.com/drive/folders/1eW0n3LgA4_uMULhJD-bUFj8dXI7d8Wis",
          notesLink:
            "https://drive.google.com/drive/folders/1jk_FY3TwT63OUbNOI1tmucZvp4CvQtDZ",
          playlistLink: "https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=V8GTDj7xybd_D5b2",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image: "https://drive.google.com/uc?export=view&id=1yMhFJ89A8zgYw0d8UjOfjfC0APLI9uj0",
          pyqLink:
            "https://drive.google.com/drive/folders/1kG0km0W1nqwj2TUTW8_BNLUJrBKxYdZY",
          notesLink:
            "https://drive.google.com/drive/folders/1b_e32HdEpIxHPFv26rHVzfbHZZNSSAD-",
          playlistLink: "https://youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&feature=shared",
          roadmap: "",
        },
        {
          name: "Management of Technology",
          image: "https://drive.google.com/uc?export=view&id=1syTHiSXLp-L5CkfgHMiTQPi02tAO7cdF",
          pyqLink:
            "https://drive.google.com/drive/folders/1A-cszL6CulRBg_a5iam_hTKvfDGY0zc6",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Principles of Artificial Intelligence",
          image: "https://drive.google.com/uc?export=view&id=1vLlhr9l8R5k9eIR5K1RfedhyNovoBLsh",
          pyqLink: "https://drive.google.com/drive/folders/1mBDWiUGOuVsTtU61f6u_9sBlN1CDhqzV",
          notesLink: "https://drive.google.com/drive/folders/1_oHSfPFD4LhROOjC_bLDSkdlwCKv-sd8",
          playlistLink: "https://youtube.com/playlist?list=PLDh_nHdEw3KOFxIcKyzynJHOp_6bjCYLs&feature=shared",
          roadmap: "",
        },
        {
          name: "Economics",
          image: "https://drive.google.com/uc?export=view&id=1JEmwtAb4rs_4wUv8dkZWay0WmHPLtDRw",
          pyqLink: "https://drive.google.com/drive/folders/1HQ7PvlCVg8xPPh5osHzmBDs-CmU1JvVn",
          notesLink: "https://drive.google.com/drive/folders/1MIviTRv8LkpB0WLz-XmBeLchMY3XxBtE",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU22KHAUmDwQ_qWCSPav_G14Z&si=9YwhhHh88ZC_ayN9",
          roadmap: "",
        },
        {
          name: "Software Engineering & Product Management",
          image: "https://drive.google.com/uc?export=view&id=1Oxhz6bwMHYgvhMonK_1OKCIGdunRTfoF",
          pyqLink: "https://drive.google.com/drive/folders/1FczsoM7e9epwuIJUa5-x_smhiwz750rn",
          notesLink: "https://drive.google.com/drive/folders/1IxtYO4TgClezalvYz_C3JmFOI56BoNa4",
          playlistLink: "https://youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&feature=shared",
          roadmap: "",
        },
        {
          name: "Computer Organization and Architecture",
          image: "https://drive.google.com/uc?export=view&id=1NDmq2few7tqIjZQP9bpwYTJeD-a_BDve",
          pyqLink: "https://drive.google.com/drive/folders/1lPY54VJlApc2udMfh0ELJI5ol2wTQjfp",
          notesLink: "https://drive.google.com/drive/folders/1EV_QwyogySTsELn9FY2M3VUzSzTy7eK6",
          playlistLink: "https://www.youtube.com/playlist?list=PLgwJf8NK-2e7XZXcFujMw--IDZ2nnsXNT",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "Soft Computing Methods",
          image: "/3_AIML/SCM.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Design and Analysis of Algorithms",
          image: "/3_AIML/DAA.png",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1bz8PDtXLKbY0mYtbZLFWC-kx0CxGifpr",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image: "/3_AIML/CN.png",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1Mm_wPEiV-BqDFRyMu4QNuuBJgZ2DtkLA",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Foundation of Data Science",
          image: "/3_AIML/FDS.png",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1g8wLoBupfl2KdSSYuAmf1eToQJm5Ukt1",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Game Theory",
          image: "/3_AIML/GT.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Machine Learning",
          image: "/3_AIML/ML.png",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1OQuVLErNef2wpx6zjF2LhNbinlaeIy8a",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Vision",
          image: "/3_AIML/CV.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Natural Language Processing",
          image: "/3_AIML/NLP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Mining",
          image: "/3_AIML/DM.png",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1w0o1JlIOp5kcQLhfv19cBHmLzWZye6Te",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Fundamentals of Automobile Engineering",
          image: "/3_AIML/FAE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
    IOT: {
      second: [
        {
          name: "Wireless Communication",
          image:
            "https://drive.google.com/uc?export=view&id=1MMusmcvQmCMVUCWU8c8yAklpjZbzDfT_",
          pyqLink: "https://drive.google.com/drive/folders/1_C5exQDvj0CC79dQY1kxAZKwMzRKvmdk",
          notesLink: "",
          playlistLink: "https://youtube.com/playlist?list=PLCyR4nKNLRkFTER9ohRBnbRFK0pWe0Qtf&si=8OjFKkqbFPDSGPnP",
          roadmap: "",
        },
        {
          name: "Cryptography and Network Security",
          image:
            "https://drive.google.com/uc?export=view&id=1V9W_5lx2iPOxng09xKbqjIXj_uGEfx2k",
          pyqLink: "https://drive.google.com/drive/folders/1WEo2jkNHVuhPUFhYG_xc1hLz4EvubB5w",
          notesLink: "https://drive.google.com/drive/folders/1HBeISehoI9nR6HTIu5YHuJe0cueRUCh0",
          playlistLink: "https://www.youtube.com/playlist?list=PL9FuOtXibFjV77w2eyil4Xzp8eooqsPp8",
          roadmap: "",
        },
        {
          name: "Statistics & Probability",
          image:
            "https://drive.google.com/uc?export=view&id=1GfaaHfQckN-VwJr1LPFCyKzgah9T-BVQ",
          pyqLink: "https://drive.google.com/drive/folders/19aSCkXjm-WtmKocDxD9ggS7ievPTEXN3",
          notesLink: "https://drive.google.com/drive/folders/1jMrTLdLlR_UPfjZBKBllpo6fajmAFjr9",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU20mH6OYmZ4DU0wtH8z8nKFa&si=dM9Toupt80RBsDOP",
          roadmap: "",
        },
        {
          name: "Data Communication",
          image:
            "https://drive.google.com/uc?export=view&id=1hRgn8Xxk1IFIjULySimcNPV7vCRS29RQ",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1zN95UHvxH31eqNOguKs_x90uvkpf8SX4",
          playlistLink: "https://youtube.com/playlist?list=PLrjkTql3jnm9xaVXzOGH5Z_xvvBguUSat&si=ViHHBjtAZUf7hYSR",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image:
            "https://drive.google.com/uc?export=view&id=19a7qJ30A0WYJW1-tla7nknMNkzOTh5fO",
          pyqLink: "https://drive.google.com/drive/folders/1j7kDOuheIXygQgzLsgc3lYddE1kEEpuF",
          notesLink: "https://drive.google.com/drive/folders/1XlZbicmJD80dPDwCGnINvMDlsnxNUcrA",
          playlistLink: "https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&feature=shared",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image:
            "https://drive.google.com/uc?export=view&id=1yMhFJ89A8zgYw0d8UjOfjfC0APLI9uj0",
          pyqLink: "https://drive.google.com/drive/folders/13fG6fVa7S3GF0U37LGaolb_rPPi5z6Iz",
          notesLink: "https://drive.google.com/drive/folders/1RwavgM2xKSw0sD_d-kn8IOOODB1UpKuX",
          playlistLink: "https://youtube.com/playlist?list=PLQEaRBV9gAFujcBWJhBT2XXsuMlIfETBy&si=F-0hNBoIf8qkYMPA",
          roadmap: "",
        },
        {
          name: "Economics",
          image:
            "https://drive.google.com/uc?export=view&id=1JEmwtAb4rs_4wUv8dkZWay0WmHPLtDRw",
          pyqLink: "https://drive.google.com/drive/folders/1oFPfDat-fIjSweamjiJQmnYcdrGfdMMx",
          notesLink: "https://drive.google.com/drive/folders/1MIviTRv8LkpB0WLz-XmBeLchMY3XxBtE",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU22KHAUmDwQ_qWCSPav_G14Z&si=9YwhhHh88ZC_ayN9",
          roadmap: "",
        },
        {
          name: "Data Communications and Computer Networks",
          image:
            "https://drive.google.com/uc?export=view&id=1OTAshwV0rp2pqXPD8YlZ3S6NL_ylNFnE",
          pyqLink: "",
          notesLink: "",
          playlistLink: "https://youtube.com/playlist?list=PLZQgf2pQtimlhO3UY6UJzIC7JVBzSbXXQ&si=LGbz4TviSIGpqFxI",
          roadmap: "",
        },
        {
          name: "Foundation of Data Science",
          image:
            "https://drive.google.com/uc?export=view&id=1h3QNFa-LVRigJJocOsAkidWcbErCPNxT",
          pyqLink: "https://drive.google.com/drive/folders/1oLISuYWCpLi6o42eVWNuXvvQp5zU32ys",
          notesLink: "",
          playlistLink: "https://youtu.be/ua-CiDNNj30?si=_bOi7foMkcoYAVqe",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image:
            "https://drive.google.com/uc?export=view&id=11R_xYDTm_hSxR39NA7huSwZYF1gJvJ_9",
          pyqLink: "https://drive.google.com/drive/folders/12O05c2VgSa1L3McyaXehJeH1CRZtyLz7",
          notesLink: "https://drive.google.com/drive/folders/1Uvg_5I8O_qEy8a9viTl-mXXRLxE9RkEB",
          playlistLink: "https://www.youtube.com/watch?v=3obEP8eLsCw&t=35487s",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image:
            "https://drive.google.com/uc?export=view&id=107WzF5EAgm68hSr_HycHB2XctuaPpFhW",
          pyqLink: "https://drive.google.com/drive/folders/1o2gQl1gakSQ_K49tY-Q5fhxo2ISUjKpq",
          notesLink: "https://drive.google.com/drive/folders/1jk_FY3TwT63OUbNOI1tmucZvp4CvQtDZ",
          playlistLink: "https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=V8GTDj7xybd_D5b2",
          roadmap: "",
        },
        {
          name: "Web Technologies",
          image:
            "https://drive.google.com/uc?export=view&id=14XpYyVFh79y8OWG2KC0ziBu5XUGLgJce",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1fz3nzYRiFbXVceq-8GUrfP2hHL9vm_dI",
          playlistLink: "https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n&si=DdiAPPaTivOx16SM",
          roadmap: "",
        },
        {
          name: "Web Programming",
          image:
            "https://drive.google.com/uc?export=view&id=17Ub1xspHJuvGplgfW-y7Pj_UKGVYto7q",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1-alSRoq5Y_Tv_NA2WJkQGlkPErE4ZlyS",
          playlistLink: "https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n&si=DdiAPPaTivOx16SM",
          roadmap: "",
        },
        {
          name: "Management of Technology",
          image:
            "https://drive.google.com/uc?export=view&id=1syTHiSXLp-L5CkfgHMiTQPi02tAO7cdF",
          pyqLink: "https://drive.google.com/drive/folders/1mV0AmSDn16G6UJLutkEpoxTKBNurEAt3",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Artificial Intelligence and Machine Learning",
          image: "https://drive.google.com/uc?export=view&id=1o8M_v5Q1AS8J0rNMwTPzJ7BFVcezwYkZ",
          pyqLink: "https://drive.google.com/drive/folders/1jZ15d1FbGUK4MedHkGs9lFSzFdzCw_T3",
          notesLink: "https://drive.google.com/drive/folders/1_87ctDdlSxHR5BHQEByY09qxDh7fFgTj",
          playlistLink: "https://youtube.com/playlist?list=PLEiEAq2VkUULyr_ftxpHB6DumOq1Zz2hq&si=YJ1TCE331tf6nVHk",
          roadmap: "",
        },
        {
          name: "Automata and Compiler Design",
          image:
            "https://drive.google.com/uc?export=view&id=10jatMHYKtSGdlKcM7FjULzcSytg0oElj",
          pyqLink: "https://drive.google.com/drive/folders/1DOEzK9xCoDVV6rAOQMJ3BFS8zZEfEeiz",
          notesLink: "https://drive.google.com/drive/folders/1w9HQdLofig_rM3zWnCgY9xlFZtQofucC",
          playlistLink: "https://www.youtube.com/playlist?list=PLmXKhU9FNesSdCsn6YQqu9DmXRMsYdZ2T",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "Design and Analysis of Algorithms",
          image: "/3_IOT/DAA.png",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1bz8PDtXLKbY0mYtbZLFWC-kx0CxGifpr",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Artificial Intelligence and Machine Learning",
          image: "/3_IOT/AI_ML.png",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/186JTWqITq4A3losWMRdc2mtM9QNxdOo5",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Sensors and Microcontrollers",
          image: "/3_IOT/S&M.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "IoT Architecture & Its Protocols",
          image: "/3_IOT/IOTARCH.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Software Engineering",
          image: "/3_IOT/SE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Cyber and Information Security",
          image: "/3_IOT/CIS.png",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1S4rZu_oRw-Bt6KNiRzrl_pIPvjdytl_9",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "IoT Design",
          image: "/3_IOT/IOT_DESIGN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Deep Learning",
          image: "/3_IOT/DL.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image: "/3_IOT/CN.png",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1Mm_wPEiV-BqDFRyMu4QNuuBJgZ2DtkLA",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
    DSE: {
      second: [
        {
          name: "Finance & Econometrics",
          image:
            "https://drive.google.com/uc?export=view&id=1JEmwtAb4rs_4wUv8dkZWay0WmHPLtDRw",
          pyqLink: "https://drive.google.com/drive/folders/1dD3PkXiVbJys8UiDPM4PppnjVirFlmdV",
          notesLink: "https://drive.google.com/drive/folders/1MIviTRv8LkpB0WLz-XmBeLchMY3XxBtE",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU22KHAUmDwQ_qWCSPav_G14Z&si=9YwhhHh88ZC_ayN9",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image:
            "https://drive.google.com/uc?export=view&id=1yMhFJ89A8zgYw0d8UjOfjfC0APLI9uj0",
          pyqLink: "https://drive.google.com/drive/folders/1fSsR_bYR7uTHgeKLXW3szgfTQRamhHCh",
          notesLink: "https://drive.google.com/drive/folders/1dDwjgCXib5prviOhnfvg__E625750iZb",
          playlistLink: "https://youtube.com/playlist?list=PLsyeobzWxl7oa1WO9n4cP3OY9nOtUcZIg&si=B4TquaHpOkdOaRZQ",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image:
            "https://drive.google.com/uc?export=view&id=19a7qJ30A0WYJW1-tla7nknMNkzOTh5fO",
          pyqLink: "https://drive.google.com/drive/folders/1GzvVOLPFHyyf9F9QSSm_fyAc0fnw2NNi",
          notesLink: "https://drive.google.com/drive/folders/1XlZbicmJD80dPDwCGnINvMDlsnxNUcrA",
          playlistLink: "https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&feature=shared",
          roadmap: "",
        },
        {
          name: "Computer System Architecture",
          image:
            "https://drive.google.com/uc?export=view&id=1e76rXlmOE_IKHwDV09ByVxl98pk0ti0q",
          pyqLink: "https://drive.google.com/drive/folders/1QgzcuxcdBobmtUH8WiXrTpvPLJm6ZPnB",
          notesLink: "https://drive.google.com/drive/folders/10wjhn9aGixqaIa2BQGGZ-yOAEqcTZKHq",
          playlistLink: "https://youtu.be/DsK35f8wyUw?si=aEQyCkYhVlPywhka",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image:
            "https://drive.google.com/uc?export=view&id=107WzF5EAgm68hSr_HycHB2XctuaPpFhW",
          pyqLink: "https://drive.google.com/drive/folders/1mQFPW-VmQ2dU62D88Au74QjFPzI4qLs-",
          notesLink: "https://drive.google.com/drive/folders/1jk_FY3TwT63OUbNOI1tmucZvp4CvQtDZ",
          playlistLink: "https://youtube.com/playlist?list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV&si=V8GTDj7xybd_D5b2",
          roadmap: "",
        },
        {
          name: "Machine Learning",
          image:
            "https://drive.google.com/uc?export=view&id=137697YbBXPXvGpyGnjeMn0KvcA9xx41q",
          pyqLink: "https://drive.google.com/drive/folders/1znUZwOclqeAqbQtfCEH7xXYK9cdj7TOc",
          notesLink: "https://drive.google.com/drive/folders/1_87ctDdlSxHR5BHQEByY09qxDh7fFgTj",
          playlistLink: "https://youtube.com/playlist?list=PLTDARY42LDV7WGmlzZtY-w9pemyPrKNUZ&si=1NcBPhGTXB8JSJDJ",
          roadmap: "",
        },
        {
          name: "Management of Technology",
          image:
            "https://drive.google.com/uc?export=view&id=1syTHiSXLp-L5CkfgHMiTQPi02tAO7cdF",
          pyqLink: "https://drive.google.com/drive/folders/1dtNb_TINiJWITIGQzb1E0_CPxNyQMhF1",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Mining",
          image:
            "https://drive.google.com/uc?export=view&id=1HYvGRUHa8gX5MLqqtDsV-D4ceAs9aMAE",
          pyqLink: "https://drive.google.com/drive/folders/1AlSkKYEhw4RTMBHntYtdMHYhC40oBv7h",
          notesLink: "https://drive.google.com/drive/folders/1mRX4TG5ChKT6NtPt5jNp0TVEDy7IMWMm",
          playlistLink: "https://youtube.com/playlist?list=PLYwpaL_SFmcChP0xiW3KK9elNuhfCLVVi&si=yJX07Jz2Wb06aR6b",
          roadmap: "",
        },
        {
          name: "Cloud Computing",
          image:
            "https://drive.google.com/uc?export=view&id=1GqsOXOnDFcz0-H4_EjUiPthZx8ApIRM0",
          pyqLink: "https://drive.google.com/drive/folders/1HlGiv6cUPJFBHqoJ20cAyQj97IzH9aAT",
          notesLink: "https://drive.google.com/drive/folders/1TdrgiDukGedsPSjYRxMSwQsZOsamh9dC",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image:
            "https://drive.google.com/uc?export=view&id=18kippQ9qVzI61j6CuDMySmL3GFneFWZ9",
          pyqLink: "https://drive.google.com/drive/folders/1Hz1SjFLmiVUzp52DIIIDrwlANzsn7hPo",
          notesLink: "https://drive.google.com/drive/folders/1nMZ3yYzp9rYiGDb0f3lqL0jqqz-dNtg0",
          playlistLink: "https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=e3p8n480ABME9G8d",
          roadmap: "",
        },
        {
          name: "Statistics and Probability",
          image:
            "https://drive.google.com/uc?export=view&id=1GfaaHfQckN-VwJr1LPFCyKzgah9T-BVQ",
          pyqLink: "https://drive.google.com/drive/folders/18L9Ch_ji_IFe3h99WxIUjmxErQ0knxUM",
          notesLink: "https://drive.google.com/drive/folders/1jMrTLdLlR_UPfjZBKBllpo6fajmAFjr9",
          playlistLink: "https://youtube.com/playlist?list=PLXLVheoMxU20mH6OYmZ4DU0wtH8z8nKFa&si=dM9Toupt80RBsDOP",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "MFDS-3",
          image: "/3_DSE/MFDS_3.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Deep Learning",
          image: "/3_DSE/DL.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image: "/3_DSE/OS.png",
          pyqLink: "",
          notesLink: "https://drive.google.com/drive/folders/1OyXy5-wtHfrhJw4efeOFaZGcLsiYKa4V",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Natural Language Processing",
          image: "/3_DSE/NLP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Cloud Computing",
          image: "/3_DSE/CC.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operations Research",
          image: "/3_DSE/OR.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Artificial Intelligence",
          image: "/3_DSE/AI.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Parallel Programming",
          image: "/3_DSE/PP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Big Data Analytics",
          image: "/3_DSE/BDA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Privacy and Security",
          image: "/3_DSE/DPS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
  };
  console.log(yearBranch + " " + branch);
  const subjects = subjectsYearWise[branch]?.[yearBranch];

  const renderSubjects = (
    subjects:
      | {
        name: string;
        image: string;
        pyqLink: string;
        notesLink: string;
        playlistLink: string;
        roadmap: string;
      }[]
      | undefined
  ) => {
    if (!subjects) return <div>No subjects found</div>;
    return (
      <div className="min-h-screen px-4 py-4  bg-cover bg-center mt-12">
        <div
          className="p-6 sm:p-8 md:p-10 text-black 
             grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
             gap-6 justify-items-center"
        >
          {subjects.map(
            ({ name, image, pyqLink, notesLink, playlistLink, roadmap }) => (
              <div key={name} className="w-full flex justify-center">
                <CardWithSelect
                  subjectName={name}
                  subjectImage={image}
                  pyqLink={pyqLink}
                  notesLink={notesLink}
                  playlistLink={playlistLink}
                  roadmap={roadmap}
                />
              </div>
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen px-4 py-4 bg-[url('/heroImage.webp')] bg-cover bg-center mt-12">
      {renderSubjects(subjects)}
    </div>
  );
}
