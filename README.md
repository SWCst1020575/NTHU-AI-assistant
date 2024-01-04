# NTHU AI assistant
* Based on [Chinese Llama 2](https://github.com/ymcui/Chinese-LLaMA-Alpaca-2) model, and use [LoRA](https://github.com/microsoft/LoRA) to fine-tune.
* Set up LLM model and use API to allow web  access it, performing the assistant in GUI app.
* Use [bitsandbytes](https://github.com/TimDettmers/bitsandbytes) to enable 8-bit mode, which can reduce the VRAM usage.
* This repo clone from [langui](https://github.com/ahmadbilaldev/langui) to build chat ui.