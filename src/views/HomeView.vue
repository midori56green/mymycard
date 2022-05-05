<template>
  <div>
    <div class="widget-box">
      <h2 class="box-title">新しいカードの作成</h2>
      <!-- form -->
      <form @submit.prevent>
        <div class="input-box">
          <span class="label">カード名</span>
          <input class="input" type="text" placeholder="マイマイカード" v-model="cardName">
        </div>
        <div class="input-box">
          <span class="label">タスク</span><br>
          <div v-for="(task, index) in registerTasks.length" :key="index">
            <input class="input" type="text" placeholder="タスク名" v-model="registerTasks[index].name">
            <input type="number" v-model="registerTasks[index].num" min="0">
            <br>
          </div>
          <button value="-" v-on:click="increaseDecreaseForm('minus', 'task')">-</button>
            {{ registerTasks.length }}
          <button v-on:click="increaseDecreaseForm('plus', 'task')">+</button>
        </div>
        <div class="input-box">
          <span class="label">ご褒美</span>
          <div v-for="(reward, index) in registerRewards" :key="index">
            <input class="input" type="text" placeholder="ケーキ" v-model="registerRewards[index].name">
            <input type="number" v-model="registerRewards[index].num" min="0">
          </div>
          <button value="-" v-on:click="increaseDecreaseForm('minus', 'reward')">-</button>
            {{ registerRewards.length }}
          <button v-on:click="increaseDecreaseForm('plus', 'reward')">+</button>
        </div>
        <div class="input-box">
          <span class="label">ゴール</span>
          <input class="input" type="number" v-model="allSteps" min="0">
        </div>
        <button class="btn" v-on:click="createNewCard">作成</button>
      </form>
      <!-- /form -->
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // create new card
      cardName: 'あんめ',
      registerTasks: [
        {
          'name': 'タスク名',
          'num': 1,
        }
      ],
      rewardExamples: [
        '気になってるスイーツを買う',
        '推しのグッズを買う',
        'ウマ娘育成',
        'きゅうり',
        '美顔器',
        'ヘアアイロン',
        'パウダー',
        'ソニック',
      ],
      registerRewards: [
        {
          'name': 'ケーキ',
          'num': 1,
        }
      ],
      allSteps: 1,
    }
  },
  methods: {
    increaseDecreaseForm(order, taragetForm) {
      let target;
      switch(taragetForm) {
        case 'task':
          target = this.registerTasks;
          break;
        case 'reward':
          target = this.registerRewards;
          break;
      }

      if(order == 'plus') {
        const array = {
          'name': 'task',
          'num': 1,
        };
        target.push(array);
      }else if(order == 'minus' && target.length > 1) {
        target.pop();
      }
    },
    createNewCard() {
      if(
        this.cardName != '' &&
        this.registerTasks.length != 0 &&
        this.registerRewards.length != 0 &&
        this.allSteps > 0
      ) {
        const newCardDetail = {
          name: this.cardName,
          tasks: this.registerTasks,
          rewards: this.rewards,
          step: this.allSteps
        }
        localStorage.setItem('card1', newCardDetail)
      }else {
        alert('未入力の項目があります！許さねぇ！！')
      }
    },
  }
}
</script>
