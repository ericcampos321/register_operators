<script setup lang="ts">
import Button from 'primevue/button';
import 'primeicons/primeicons.css';
</script>

<template>
    <div>
        <nav class="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-white shadow-md z-50">
            <div class="flex items-center gap-2">
                <img src="../../assets/logo.png" alt="IntuitLive" width="180" />
            </div>
            <Button label="Sign out" unstyled
                pt:root="bg-purple-600 border-black text-white px-4 py-2 rounded-md hover:bg-black transition-colors" />
        </nav>

        <div class="fixed top-16 left-0 p-4 w-60 h-screen opacity-80 z-40 bg-purple-600 shadow-md">
            <div class="w-full mt-4">
                <ul class="w-full">
                    <li class="mb-4 flex w-full">
                        <Button unstyled
                            class="w-full flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-black hover:text-purple-600 transition-colors">
                            <i class="pi pi-chart-bar"></i>
                            Dashboard
                        </Button>
                    </li>
                    <li class="mb-4 flex w-full ">
                        <Button unstyled
                            class="w-full flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-black hover:text-purple-600 transition-colors">
                            <i class="pi pi-users"></i>
                            Operators
                        </Button>
                    </li>
                    <li class="mb-4 flex w-full ">
                        <Button unstyled
                            class="w-full flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-black hover:text-purple-600 transition-colors">
                            <i class="pi pi-user"></i>
                            Admin
                        </Button>
                    </li>
                    <li class="mb-4 flex w-full ">
                        <Button unstyled
                            class="w-full flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-black hover:text-purple-600 transition-colors">
                            <i class="pi pi-cog"></i>
                            Settings
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
