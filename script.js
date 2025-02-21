document.addEventListener("DOMContentLoaded", function () {
    /** 슬라이드 기능 **/
    const slides = document.querySelector(".slides");
    const slide = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    
    let index = 0;
    const visibleSlides = 3; // 한 번에 보이는 슬라이드 개수
    const totalSlides = slide.length;
    const maxIndex = totalSlides - visibleSlides; // 최대로 이동할 수 있는 index

    function showSlide(i) {
        if (i > maxIndex) index = 0;
        if (i < 0) index = maxIndex - 1;
        slides.style.transform = `translateX(${-index * 540}px)`;
    }

    nextBtn.addEventListener("click", () => {
        index++;
        showSlide(index);
    });

    prevBtn.addEventListener("click", () => {
        index--;
        showSlide(index);
    });

    // 자동 슬라이드 활성화 (필요 시 주석 해제)
    // setInterval(() => {
    //     index++;
    //     showSlide(index);
    // }, 3000); 

    /** 네비게이션 메뉴 스크롤 기능 **/
    const menuLinks = document.querySelectorAll(".menu li a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            
            if (targetId === "all") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});
