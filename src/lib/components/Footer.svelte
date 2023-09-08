<script>
    import Logo from "./icons/Logo.svelte";

</script>


<footer>
    <div class="company-info w-full">
        <div class="flex flex-col justify-center items-center py-2 gap-2">
            <Logo/>
            <p>Modern Furniture Crafted with Elegance</p>
            <p>বিশ্বস্ত ফার্নিচার ব্র্যান্ড</p>
        </div>
        <p class="border p-2">
            <span class=" text-2xl font-semibold">Hatil</span> is one of the first furniture brands in Bangladesh to expand globally. Today, this multinational company is proudly representing Bangladeshi furniture in countries like Canada, Australia, USA, Kuwait, UAE, Saudi Arabia, Russia, Egypt, Thailand, India, Nepal, and Bhutan.
            Built upon the trust of millions of customers, Hatil has provided premium quality furniture since 1989. Manufactured with the best quality timber, the modern and stylish designed furniture are a signature of elegance and comfort.
            
            So if you are looking to buy the finest quality of furniture (ফার্নিচার), look no further than HATIL. With its wide range of designs and affordable pricing, Hatil has managed to cater to even the most meticulous shopper. 
        </p>
    </div>
    <div class="flex flex-col gap-4 py-4 items-center w-full bg-slate-300">
        <p class="text-3xl text-center">Corporate Office</p>
        <div class="text-center">
            <p>8 Shewrapara,</p>
            <p>Rokeya Soroni, Mirpur</p>
            <p>Dhaka-1216, Bangladesh</p>
            <p>Tel: +88328732321</p>
            <p>Phone: +8801213232234</p>
            <p>Email: helloworld@gmail.com</p>
        </div>

    </div>
</footer>

<style lang="postcss">
    footer{
        @apply h-auto w-full border-t p-2;
    }
</style>