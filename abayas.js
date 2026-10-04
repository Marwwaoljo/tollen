/* =========================================================
   TOLEN COUTURE
   ABAYA COLLECTION
   ========================================================= */

const tolenAbayas = [

    {
        id: "serab",
        name: "عباية سَرَاب النجوم",
        english: "Serab Al-Nujoom",
        price: "1,850",
        category: "couture",
        categoryLabel: "كوتور",
        badge: "إصدار محدود",

        images: [
            "images/نك.png",
            "images/نمك.png",
            "images/تنت.png",
            "images/تكم.png"
        ],

        description:
            "عباية كوتور فاخرة مستوحاة من سحر النجوم، بتفاصيل يدوية ولمسات أنثوية راقية.",

        productPage: "product.html?id=serab"
    },

    {
        id: "fajr",
        name: "عباية فجر الأنجوم",
        english: "Fajr Al-Nujoom",
        price: "1,499",
        category: "limited",
        categoryLabel: "إصدار محدود",
        badge: "الأكثر طلباً",

        images: [
            "images/سب.png",
            "images/بيس.png",
            "images/يل.png",
            "images/لب.png"
        ],

        description:
            "تصميم شاعري بانسيابية ناعمة وتفاصيل فاخرة تناسب الإطلالات المسائية.",

        productPage: "product.html?id=fajr"
    },

    {
        id: "rose",
        name: "عباية وردة الحكاية",
        english: "Rose Tale",
        price: "1,390",
        category: "occasion",
        categoryLabel: "مناسبات",
        badge: "جديد",

        images: [
            "images/يب.png",
            "images/تازز.png",
            "images/تهما.png",
            "images/تززت.png"
        ],

        description:
            "عباية أنثوية مستوحاة من بتلات الورود وتفاصيل القصص الخيالية.",

        productPage: "product.html?id=rose"
    },

    {
        id: "moon",
        name: "عباية قمر تولين",
        english: "Tolen Moon",
        price: "1,250",
        category: "daily",
        categoryLabel: "يومية",
        badge: "",

        images: [
            "images/تكمن.png",
            "images/ظمنظ.png",
            "images/متكمم.png",
            "images/ةىوة.png"
        ],

        description:
            "تصميم يومي فاخر بقصة هادئة وانسيابية تناسب حضوركِ اليومي.",

        productPage: "product.html?id=moon"
    },

    {
        id: "royal",
        name: "عباية المخمل الملكي",
        english: "Royal Velvet",
        price: "1,650",
        category: "occasion",
        categoryLabel: "مناسبات",
        badge: "مميز",

        images: [
            "images/تنمتن.png",
            "images/لبنت.png",
            "images/امت.png",
            "images/كمتنكنمك.png"
        ],

        description:
            "تصميم ملكي فاخر للمناسبات الخاصة بلمسات تولين الراقية.",

        productPage: "product.html?id=royal"
    },

    {
        id: "fairytale",
        name: "عباية حكاية المساء",
        english: "Evening Fairytale",
        price: "1,550",
        category: "couture",
        categoryLabel: "كوتور",
        badge: "Atelier",

        images: [
            "images/تةرى.png",
            "images/ؤى.png",
            "images/مطنت.png",
            "images/طط.png"
        ],

        description:
            "قطعة مستوحاة من أمسيات الحكايات الخرافية بتفاصيل ناعمة وفاخرة.",

        productPage: "product.html?id=fairytale"
    },

    {
        id: "silk",
        name: "عباية الحرير الوردي",
        english: "Rose Silk",
        price: "1,280",
        category: "daily",
        categoryLabel: "يومية",
        badge: "",

        images: [
            "images/كسس.png",
            "images/لبنت.png",
            "images/كسكسش.png",
            "images/كسكسش.png"
        ],

        description:
            "حرير ناعم وقصة مريحة تجمع بين البساطة والفخامة.",

        productPage: "product.html?id=silk"
    },

    {
        id: "cinderella",
        name: "عباية سندريلا",
        english: "Cinderella",
        price: "1,750",
        category: "limited",
        categoryLabel: "إصدار محدود",
        badge: "Limited",

        images: [
            "images/kl;j.png",
            "images/soas.png",
            "images/jkl.png",
            "images/df.png"
        ],

        description:
            "تصميم ساحر مستوحى من أجواء القصص الخيالية بتفاصيل تولين الخاصة.",

        productPage: "product.html?id=cinderella"
    }

];


/* =========================================================
   CREATE PRODUCT CARD
   ========================================================= */

function createAbayaCard(product, index) {

    const card = document.createElement("article");

    card.className = "tolen-abaya-card";

    card.dataset.category = product.category;

    card.style.setProperty(
        "--card-delay",
        `${index * 80}ms`
    );

    /*
       الصورة الرئيسية أصبحت:
       product.images[0]
       بدل product.image
    */

    const mainImage =
        product.images?.[0] || "images/نك.png";

    card.innerHTML = `

        <div class="tolen-abaya-image-wrap">

            <a
                href="${product.productPage}"
                class="tolen-abaya-image-link"
                aria-label="مشاهدة ${product.name}"
            >

                <img
                    src="${mainImage}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <div class="tolen-abaya-image-shade"></div>

            </a>


            ${
                product.badge
                ?
                `
                <span class="tolen-abaya-badge">
                    ${product.badge}
                </span>
                `
                :
                ""
            }


            <span class="tolen-abaya-category">
                ${product.categoryLabel}
            </span>


            <!-- WISHLIST -->

            <button
                type="button"
                class="tolen-abaya-wishlist"
                aria-label="إضافة ${product.name} للمفضلة"
            >
                <i class="fa-regular fa-heart"></i>
            </button>


            <!-- VIEW BUTTON -->

            <a
                href="${product.productPage}"
                class="tolen-abaya-image-view"
                aria-label="مشاهدة تفاصيل ${product.name}"
            >
                <span>مشاهدة العباية</span>
                <i class="fa-solid fa-arrow-left"></i>
            </a>

        </div>


        <div class="tolen-abaya-info">

            <span class="tolen-abaya-english">
                ${product.english}
            </span>

            <h3>
                ${product.name}
            </h3>

            <p>
                ${product.description}
            </p>


            <div class="tolen-abaya-bottom">

                <strong>
                    ${product.price}
                    <small>ر.س</small>
                </strong>


                <a
                    href="${product.productPage}"
                    class="tolen-abaya-view"
                >
                    مشاهدة العباية
                    <i class="fa-solid fa-arrow-left"></i>
                </a>

            </div>

        </div>
    `;

    return card;
}


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderAbayas(filter = "all") {

    const grid =
        document.getElementById("abayaGrid");

    if (!grid) return;

    grid.innerHTML = "";


    const filteredProducts =
        filter === "all"
            ? tolenAbayas
            : tolenAbayas.filter(
                product =>
                    product.category === filter
            );


    filteredProducts.forEach(
        (product, index) => {

            const card =
                createAbayaCard(
                    product,
                    index
                );

            grid.appendChild(card);


            requestAnimationFrame(() => {

                setTimeout(() => {

                    card.classList.add(
                        "is-visible"
                    );

                }, index * 80);

            });

        }
    );


    initWishlistButtons();

    initScrollReveal();
}


/* =========================================================
   FILTERS
   ========================================================= */

function initAbayaFilters() {

    const filters =
        document.querySelectorAll(
            ".abaya-filter"
        );


    filters.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filters.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                button.classList.add(
                    "active"
                );


                renderAbayas(
                    button.dataset.filter
                );

            }
        );

    });

}


/* =========================================================
   WISHLIST
   ========================================================= */

function initWishlistButtons() {

    document
        .querySelectorAll(
            ".tolen-abaya-wishlist"
        )
        .forEach(button => {

            /*
             منع تكرار الحدث
            */

            if (button.dataset.wishlistReady) {
                return;
            }

            button.dataset.wishlistReady = "true";


            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    event.stopPropagation();


                    const icon =
                        button.querySelector("i");


                    if (
                        button.classList.contains(
                            "active"
                        )
                    ) {

                        button.classList.remove(
                            "active"
                        );

                        icon.className =
                            "fa-regular fa-heart";

                    } else {

                        button.classList.add(
                            "active"
                        );

                        icon.className =
                            "fa-solid fa-heart";

                    }

                }
            );

        });

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function initScrollReveal() {

    const cards =
        document.querySelectorAll(
            ".tolen-abaya-card:not(.reveal-ready)"
        );


    if (!cards.length) return;


    cards.forEach(card => {

        card.classList.add(
            "reveal-ready"
        );

    });


    if (
        !("IntersectionObserver" in window)
    ) {

        cards.forEach(card => {

            card.classList.add(
                "is-visible"
            );

        });

        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "is-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    cards.forEach(card => {

        observer.observe(card);

    });

}


/* =========================================================
   IMAGE HOVER EFFECT
   ========================================================= */

function initAbayaImageMotion() {

    document
        .querySelectorAll(
            ".tolen-abaya-image-wrap"
        )
        .forEach(wrapper => {

            if (wrapper.dataset.motionReady) {
                return;
            }

            wrapper.dataset.motionReady = "true";


            wrapper.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        wrapper.getBoundingClientRect();


                    const x =
                        (event.clientX - rect.left)
                        / rect.width;


                    const y =
                        (event.clientY - rect.top)
                        / rect.height;


                    const moveX =
                        (x - 0.5) * 8;


                    const moveY =
                        (y - 0.5) * 8;


                    wrapper.style.setProperty(
                        "--mouse-x",
                        `${moveX}px`
                    );


                    wrapper.style.setProperty(
                        "--mouse-y",
                        `${moveY}px`
                    );

                }
            );


            wrapper.addEventListener(
                "mouseleave",
                () => {

                    wrapper.style.setProperty(
                        "--mouse-x",
                        "0px"
                    );

                    wrapper.style.setProperty(
                        "--mouse-y",
                        "0px"
                    );

                }
            );

        });

}


/* =========================================================
   INIT
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderAbayas();

        initAbayaFilters();

        initAbayaImageMotion();

    }
);

    /* =========================================================
   TOLEN COUTURE
   Product Page Interactions
   Vanilla JavaScript — No Tailwind
   ========================================================= */


/* =========================================================
   SIZE SELECTION
   ========================================================= */

function selectSize(button, size) {

    document.querySelectorAll(".size-pill").forEach((item) => {
        item.classList.remove(
            "bg-primary",
            "text-on-primary",
            "font-semibold",
            "shadow-sm"
        );

        item.classList.add(
            "bg-surface-container",
            "text-on-surface-variant"
        );

        delete item.dataset.selectedSize;
    });

    button.classList.add(
        "bg-primary",
        "text-on-primary",
        "font-semibold",
        "shadow-sm"
    );

    button.classList.remove(
        "bg-surface-container",
        "text-on-surface-variant"
    );

    button.dataset.selectedSize = size;

    window.selectedTolenSize = size;
}
window.selectedTolenSize = "52";
/* =========================================================
   BESPOKE PANEL
   ========================================================= */

function toggleBespokePanel() {

    const panel = document.getElementById("bespokePanel");
    const chevron = document.getElementById("bespokeChevron");

    if (!panel || !chevron) return;

    const hidden = panel.classList.contains("hidden");

    if (hidden) {

        panel.classList.remove("hidden");
        chevron.classList.add("rotate-180");

    } else {

        panel.classList.add("hidden");
        chevron.classList.remove("rotate-180");
    }
}


/* =========================================================
   WISHLIST
   ========================================================= */

function toggleWishlist() {

    const icon = document.getElementById("wishlistIcon");
    const button = document.getElementById("wishlistBtn");

    if (!icon || !button) return;

    const filled =
        icon.style.fontVariationSettings.includes("FILL");

    if (filled) {

        icon.style.fontVariationSettings = "";
        icon.classList.remove("text-primary");

        button.setAttribute(
            "aria-label",
            "إضافة للمفضلة"
        );

    } else {

        icon.style.fontVariationSettings =
            "'FILL' 1";

        icon.classList.add("text-primary");

        button.setAttribute(
            "aria-label",
            "إزالة من المفضلة"
        );
    }
}


/* =========================================================
   MODAL
   ========================================================= */

function toggleModal(id) {

    const modal = document.getElementById(id);

    if (!modal) return;

    modal.classList.toggle("hidden");

    if (!modal.classList.contains("hidden")) {

        document.body.style.overflow = "hidden";

    } else {

        document.body.style.overflow = "";
    }
}


/* =========================================================
   CLOSE MODAL WHEN CLICKING BACKDROP
   ========================================================= */

document.addEventListener("click", function (event) {

    const modal = document.getElementById("sizeGuideModal");

    if (!modal) return;

    if (
        event.target === modal &&
        !modal.classList.contains("hidden")
    ) {

        toggleModal("sizeGuideModal");
    }
});


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key !== "Escape") return;

    const modal = document.getElementById("sizeGuideModal");

    if (
        modal &&
        !modal.classList.contains("hidden")
    ) {

        toggleModal("sizeGuideModal");
    }
});


/* =========================================================
   GALLERY
   ========================================================= */

let galleryImages = [];


function changeThumbnail(index) {

    const mainImage =
        document.getElementById("mainGalleryImage");

    const buttons =
        document.querySelectorAll(".thumbnail-btn");

    if (!mainImage || !buttons.length) return;

    const selected =
        galleryImages[index];

    if (selected) {

        mainImage.style.opacity = "0";

        setTimeout(() => {

            mainImage.src = selected;

            mainImage.style.opacity = "1";

        }, 120);
    }


    buttons.forEach((button, i) => {

        if (i === index) {

            button.classList.add(
                "ring-2",
                "ring-primary",
                "ring-offset-2"
            );

            button.classList.remove(
                "opacity-75"
            );

        } else {

            button.classList.remove(
                "ring-2",
                "ring-primary",
                "ring-offset-2"
            );

            button.classList.add(
                "opacity-75"
            );
        }
    });
}


/* =========================================================
   DYNAMIC PRODUCT DATA
   Reads ?id=serab / ?id=fajr / ?id=rose ...
   Uses the existing products from scriptt.js
   ========================================================= */

function initDynamicProduct() {

    const params = new URLSearchParams(window.location.search);

    const productId = params.get("id") || "serab";

    const product =
        typeof tolenAbayas !== "undefined" &&
        Array.isArray(tolenAbayas)
            ? tolenAbayas.find(item => item.id === productId)
            : null;

    if (!product) {
        return;
    }

    /* Product title */

    const nameElement =
        document.getElementById("productName");

    if (nameElement) {
        nameElement.textContent = product.name;
    }

    /* Price */

    const priceElement =
        document.getElementById("productPrice");

    if (priceElement) {
        priceElement.textContent = product.price;
    }

    /* Description */

    const descriptionElement =
        document.getElementById("productDescription");

    if (descriptionElement && product.description) {
        descriptionElement.textContent = product.description;
    }

    /* Breadcrumb */

    const breadcrumb =
        document.querySelector(
            "nav[aria-label='مسار التصفح'] span.text-primary"
        );

    if (breadcrumb) {
        breadcrumb.textContent = product.name;
    }

    /* Browser title */

    document.title =
        `${product.name} | TOLEN COUTURE`;

    /* Product images */

    galleryImages =
        Array.isArray(product.images)
            ? product.images.slice(0, 4)
            : [];

    const mainImage =
        document.getElementById("mainGalleryImage");

    if (mainImage && galleryImages.length) {

        mainImage.src = galleryImages[0];

        mainImage.alt = product.name;

        mainImage.style.opacity = "1";
    }

    /* Four thumbnails */

    const thumbnailButtons =
        document.querySelectorAll(".thumbnail-btn");

    thumbnailButtons.forEach((button, index) => {

        const image =
            button.querySelector("img");

        if (!image) return;

        const imageSrc =
            galleryImages[index] || "";

        image.src = imageSrc;

        image.alt =
            `${product.name} — الصورة ${index + 1}`;

        button.style.display =
            imageSrc ? "" : "none";

        if (index === 0) {

            button.classList.add(
                "ring-2",
                "ring-primary",
                "ring-offset-2"
            );

            button.classList.remove(
                "opacity-75"
            );

        } else {

            button.classList.remove(
                "ring-2",
                "ring-primary",
                "ring-offset-2"
            );

            button.classList.add(
                "opacity-75"
            );
        }
    });

    /* Update the add-to-cart toast product name */

    const toastTitle =
        document.querySelector(
            "#cartToast p.font-label-lg"
        );

    if (toastTitle) {

        toastTitle.textContent =
            `أُضيفت "${product.name}" إلى حقيبة الأحلام`;
    }

    /* Store current product globally */

    window.currentTolenProduct = product;
}


/* =========================================================
   INIT DYNAMIC PRODUCT
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initDynamicProduct();

    }
);


/* =========================================================
   ADD TO CART
   ========================================================= */

/* =========================================================
   TOLEN CART STORAGE
   ========================================================= */

const TOLEN_CARTKEY = "tolenCart";


function getTolenCart() {

    try {

        const cart = JSON.parse(
            localStorage.getItem(TOLEN_CARTKEY)
        );

        return Array.isArray(cart) ? cart : [];

    } catch (error) {

        console.error("تعذر قراءة السلة:", error);

        return [];
    }
}


function saveTolenCart(cart) {

    localStorage.setItem(
        TOLEN_CARTKEY,
        JSON.stringify(cart)
    );
}


/* =========================================================
   ADD CURRENT PRODUCT TO CART
   ========================================================= */

function handleAddToCart() {

    const product = window.currentTolenProduct;

    if (!product) {

        console.error("لم يتم تحميل المنتج الحالي.");

        showTolenCartToast(
            "تعذر إضافة المنتج، أعيدي تحميل الصفحة."
        );

        return;
    }


    const selectedSize =
        window.selectedTolenSize ||
        document.querySelector(
            ".size-pill.bg-primary"
        )?.dataset.selectedSize ||
        "52";


    const cart = getTolenCart();


    /*
     * نفس المنتج + نفس المقاس
     * = زيادة الكمية بدل إنشاء عنصر جديد
     */

    const existingItem = cart.find(
        item =>
            item.id === product.id &&
            item.size === selectedSize
    );


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            english: product.english || "",

            price: product.price,

            image:
                product.images?.[0] ||
                "",

            size: selectedSize,

            quantity: 1

        });
    }


    saveTolenCart(cart);

    renderTolenCart();

    updateTolenCartCount();

    showTolenCartToast(
        `أُضيفت "${product.name}" — مقاس ${selectedSize} إلى حقيبة الأحلام`
    );


    /*
     * فتح السلة بعد الإضافة
     */

    openTolenCart();
}

function showTolenCartToast(message) {
    const toast = document.getElementById("cartToast");

    if (!toast) {
        console.warn("العنصر #cartToast غير موجود في الصفحة.");
        return;
    }

    const title = toast.querySelector("p.font-label-lg");

    if (title) {
        title.textContent = message;
    }

    // إظهار الإشعار
    toast.classList.remove(
        "translate-y-24",
        "opacity-0"
    );

    toast.classList.add(
        "translate-y-0",
        "opacity-100"
    );

    // إخفاء الإشعار بعد 3.5 ثوانٍ
    clearTimeout(window.tolenCartToastTimer);

    window.tolenCartToastTimer = setTimeout(() => {
        toast.classList.remove(
            "translate-y-0",
            "opacity-100"
        );

        toast.classList.add(
            "translate-y-24",
            "opacity-0"
        );
    }, 3500);
}
/* =========================================================
   RENDER CART
   ========================================================= */

function renderTolenCart() {

    const cart = getTolenCart();

    const cartItems =
        document.getElementById("cartItems");

    const emptyCart =
        document.getElementById("emptyCart");

    const cartFooter =
        document.querySelector(".side-cart__footer");


    if (!cartItems) return;


    /*
     * السلة فارغة
     */

    if (!cart.length) {

        cartItems.innerHTML = "";

        cartItems.style.display = "none";

        if (emptyCart) {
            emptyCart.hidden = false;
        }

        if (cartFooter) {
            cartFooter.style.display = "none";
        }

        updateTolenCartTotal();

        updateShippingProgress();

        return;
    }


    /*
     * السلة تحتوي منتجات
     */

    cartItems.style.display = "";

    if (emptyCart) {
        emptyCart.hidden = true;
    }

    if (cartFooter) {
        cartFooter.style.display = "";
    }


    cartItems.innerHTML = cart.map((item, index) => {

        const price =
            parseTolenPrice(item.price);

        const total =
            price * item.quantity;


        return `
            <div
                class="cart-item"
                data-cart-index="${index}"
                data-product-id="${item.id}"
                data-size="${item.size}"
            >

                <div class="cart-item__image">

                    <img
                        src="${item.image}"
                        alt="${escapeTolenHTML(item.name)}"
                    >

                </div>


                <div class="cart-item__content">

                    <div class="cart-item__top">

                        <div>

                            <span class="cart-item__category">
                                عباية تولين
                            </span>

                            <h3>
                                ${escapeTolenHTML(item.name)}
                            </h3>

                            <span
                                class="cart-item__size"
                                style="
                                    display:block;
                                    font-size:12px;
                                    opacity:.65;
                                    margin-top:4px;
                                "
                            >
                                المقاس: ${escapeTolenHTML(item.size)}
                            </span>

                        </div>


                        <button
                            type="button"
                            class="cart-item__remove"
                            data-cart-index="${index}"
                            aria-label="حذف المنتج"
                        >

                            <i class="fa-regular fa-trash-can"></i>

                        </button>

                    </div>


                    <div class="cart-item__bottom">

                        <div class="cart-quantity">

                            <button
                                type="button"
                                class="quantity-btn"
                                data-action="decrease"
                                data-cart-index="${index}"
                            >
                                −
                            </button>

                            <span class="quantity">
                                ${item.quantity}
                            </span>

                            <button
                                type="button"
                                class="quantity-btn"
                                data-action="increase"
                                data-cart-index="${index}"
                            >
                                +
                            </button>

                        </div>


                        <strong class="cart-item__price">

                            ${formatTolenPrice(total)} ر.س

                        </strong>

                    </div>

                </div>

            </div>
        `;

    }).join("");


    updateTolenCartTotal();

    updateTolenCartCount();

    updateShippingProgress();
}


/* =========================================================
   PRICE HELPERS
   ========================================================= */

function parseTolenPrice(price) {

    return Number(
        String(price)
            .replace(/,/g, "")
            .replace(/٬/g, "")
            .replace(/[^\d.]/g, "")
    ) || 0;
}


function formatTolenPrice(number) {

    return new Intl.NumberFormat("ar-SA").format(
        Math.round(number)
    );
}


/* =========================================================
   HTML SAFETY
   ========================================================= */

function escapeTolenHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
/* =========================================================
   CART TOTAL
   ========================================================= */

function updateTolenCartTotal() {

    const cart = getTolenCart();

    const subtotal = cart.reduce(
        (total, item) => {

            return total +
                (
                    parseTolenPrice(item.price) *
                    Number(item.quantity || 1)
                );

        },
        0
    );


    const subtotalElement =
        document.getElementById("cartSubtotal");


    if (subtotalElement) {

        subtotalElement.textContent =
            `${formatTolenPrice(subtotal)} ر.س`;
    }
}
/* =========================================================
   CART COUNT
   ========================================================= */

function updateTolenCartCount() {

    const cart = getTolenCart();

    const count = cart.reduce(
        (total, item) =>
            total + Number(item.quantity || 1),
        0
    );


    document
        .querySelectorAll("[data-cart-count]")
        .forEach(element => {

            element.textContent = count;

            element.hidden = count === 0;

        });
}
/* =========================================================
   OPEN / CLOSE SIDE CART
   ========================================================= */

function openTolenCart() {

    const sideCart =
        document.getElementById("sideCart");

    const overlay =
        document.getElementById("cartOverlay");

    if (!sideCart) return;

    renderTolenCart();

    sideCart.classList.add("is-open");

    sideCart.setAttribute(
        "aria-hidden",
        "false"
    );

    if (overlay) {

        overlay.classList.add("is-open");

        overlay.setAttribute(
            "aria-hidden",
            "false"
        );
    }

    document.body.style.overflow = "hidden";
}


function closeTolenCart() {

    const sideCart =
        document.getElementById("sideCart");

    const overlay =
        document.getElementById("cartOverlay");


    if (sideCart) {

        sideCart.classList.remove("is-open");

        sideCart.setAttribute(
            "aria-hidden",
            "true"
        );
    }


    if (overlay) {

        overlay.classList.remove("is-open");

        overlay.setAttribute(
            "aria-hidden",
            "true"
        );
    }


    document.body.style.overflow = "";
}
/* =========================================================
   SHIPPING PROGRESS
   ========================================================= */

function updateShippingProgress() {

    const cart = getTolenCart();

    const subtotal = cart.reduce(
        (total, item) => {

            return total +
                (
                    parseTolenPrice(item.price) *
                    Number(item.quantity || 1)
                );

        },
        0
    );


    const freeShippingAmount = 3000;

    const remaining =
        Math.max(
            0,
            freeShippingAmount - subtotal
        );


    const message =
        document.getElementById(
            "shippingMessage"
        );

    const progress =
        document.getElementById(
            "shippingProgress"
        );


    if (message) {

        if (remaining <= 0) {

            message.textContent =
                "التوصيل المجاني متاح ✦";

        } else {

            message.textContent =
                `متبقي ${formatTolenPrice(remaining)} ر.س`;
        }
    }


    if (progress) {

        const percentage =
            Math.min(
                100,
                (subtotal / freeShippingAmount) * 100
            );

        progress.style.width =
            `${percentage}%`;
    }
}
/* =========================================================
   SMOOTH MAIN IMAGE TRANSITION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const image =
            document.getElementById(
                "mainGalleryImage"
            );

        if (image) {

            image.style.transition =
                "opacity .18s ease, transform .7s cubic-bezier(.22,.61,.36,1)";
        }
    }
);
/* =========================================================
   CART EVENTS
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderTolenCart();

        updateTolenCartCount();


        /* Header cart */

        document
            .querySelectorAll("[data-cart]")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        openTolenCart();
                    }
                );
            });


        /* Close */

        const closeButton =
            document.getElementById(
                "closeCart"
            );

        if (closeButton) {

            closeButton.addEventListener(
                "click",
                closeTolenCart
            );
        }


        /* Overlay */

        const overlay =
            document.getElementById(
                "cartOverlay"
            );

        if (overlay) {

            overlay.addEventListener(
                "click",
                closeTolenCart
            );
        }


        /* Continue shopping */

        const continueShopping =
            document.getElementById(
                "continueShopping"
            );

        if (continueShopping) {

            continueShopping.addEventListener(
                "click",
                closeTolenCart
            );
        }


        const continueEmpty =
            document.getElementById(
                "continueShoppingEmpty"
            );

        if (continueEmpty) {

            continueEmpty.addEventListener(
                "click",
                closeTolenCart
            );
        }

    }
);
/* =========================================================
   CART QUANTITY + REMOVE
   ========================================================= */

document.addEventListener(
    "click",
    function (event) {


        /* Increase / Decrease */

        const quantityButton =
            event.target.closest(
                ".quantity-btn"
            );


        if (quantityButton) {

            const index =
                Number(
                    quantityButton.dataset.cartIndex
                );

            const action =
                quantityButton.dataset.action;


            const cart =
                getTolenCart();


            if (!cart[index]) return;


            if (action === "increase") {

                cart[index].quantity += 1;
            }


            if (action === "decrease") {

                cart[index].quantity -= 1;


                if (
                    cart[index].quantity <= 0
                ) {

                    cart.splice(index, 1);
                }
            }


            saveTolenCart(cart);

            renderTolenCart();

            return;
        }


        /* Remove */

        const removeButton =
            event.target.closest(
                ".cart-item__remove"
            );


        if (removeButton) {

            const index =
                Number(
                    removeButton.dataset.cartIndex
                );


            const cart =
                getTolenCart();


            if (!cart[index]) return;


            cart.splice(index, 1);

            saveTolenCart(cart);

            renderTolenCart();
        }

    }
);
