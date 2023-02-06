import { createSelector } from 'reselect';
import { NameSpaces, QuestLevels, QuestTypes } from '../../const';
import { State } from '../../types/state';

export const getActiveQuestType = (state: State) => state[NameSpaces.Data].activeQuestType;
export const getActiveQuestLevel = (state: State) => state[NameSpaces.Data].activeQuestLevel;
export const getQuestsList = (state: State) => state[NameSpaces.Data].questsList;
export const getQuestData = (state: State) => state[NameSpaces.Data].quest;
export const getBookingData = (state: State) => state[NameSpaces.Data].bookingData;

export const getQuestsByType = createSelector(
  [getQuestsList, getActiveQuestType],
  (allQuests, activeQuestsType) => {
    switch (activeQuestsType) {
      case QuestTypes.all:
        return allQuests;
      case QuestTypes.adventures:
        return allQuests.filter((quest) => quest.type === 'adventures');
      case QuestTypes.horror:
        return allQuests.filter((quest) => quest.type === 'horror');
      case QuestTypes.mystic:
        return allQuests.filter((quest) => quest.type === 'mystic');
      case QuestTypes.detective:
        return allQuests.filter((quest) => quest.type === 'detective');
      case QuestTypes['sci-fi']:
        return allQuests.filter((quest) => quest.type === 'sci-fi');
    }
  }
);

export const getQuestsByLevel = createSelector(
  [getQuestsList, getActiveQuestLevel],
  (allQuests, activeQuestsLevel) => {
    switch (activeQuestsLevel) {
      case QuestLevels.all:
        return allQuests;
      case QuestLevels.easy:
        return allQuests.filter((quest) => quest.level === 'easy');
      case QuestLevels.middle:
        return allQuests.filter((quest) => quest.level === 'medium');
      case QuestLevels.hard:
        return allQuests.filter((quest) => quest.level === 'hard');
    }
  }
);

